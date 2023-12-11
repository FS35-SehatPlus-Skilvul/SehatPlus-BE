const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Admin, Pasien, Dokter } = require('../models');
require('dotenv').config();

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Pilih model berdasarkan tipe login (role)
    let userModel;
    switch (role) {
      case 'admin':
        userModel = Admin;
        break;
      case 'pasien':
        userModel = Pasien;
        break;
      case 'dokter':
        userModel = Dokter;
        break;
      default:
        userModel = User;
        break;
    }

    // Cari user berdasarkan email
    const user = await userModel.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Verifikasi password
    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Buat token JWT
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const registerPasien = async (req, res) => {
  try {
    const { nama, email, gender, phone, password } = req.body;

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Membuat pasien baru
    const newPasien = await Pasien.create({
      nama,
      email,
      gender,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Pasien registered successfully', pasien: newPasien });
  } catch (error) {
    console.error('Error during Pasien registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  login,
  registerPasien,
};
