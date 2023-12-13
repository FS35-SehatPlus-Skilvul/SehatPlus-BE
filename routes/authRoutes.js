// authController.js
const Pasien = require('../models/pasien');
const Dokter = require('../models/dokter');
const Admin = require('../models/admin');

const authController = {
  register: async (req, res) => {
    try {
      const { username, password, role } = req.body;

      // Pastikan role yang valid (pasien, dokter, atau admin)
      if (!['pasien', 'dokter', 'admin'].includes(role)) {
        return res.status(400).json({ message: 'Role tidak valid' });
      }

      // Pilih model berdasarkan role
      let UserModel;
      switch (role) {
        case 'pasien':
          UserModel = Pasien;
          break;
        case 'dokter':
          UserModel = Dokter;
          break;
        case 'admin':
          UserModel = Admin;
          break;
        default:
          return res.status(400).json({ message: 'Role tidak valid' });
      }

      // Buat objek user baru
      const newUser = new UserModel({ username, password });

      // Simpan user ke basis data
      await newUser.save();

      res.status(201).json({ message: 'Pendaftaran berhasil' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Terjadi kesalahan saat pendaftaran' });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password, role } = req.body;

      // Pilih model berdasarkan role
      let UserModel;
      switch (role) {
        case 'pasien':
          UserModel = Pasien;
          break;
        case 'dokter':
          UserModel = Dokter;
          break;
        case 'admin':
          UserModel = Admin;
          break;
        default:
          return res.status(400).json({ message: 'Role tidak valid' });
      }

      // Cari user berdasarkan username dan password
      const user = await UserModel.findOne({ username, password });

      if (!user) {
        return res.status(401).json({ message: 'Login gagal. Periksa kembali username dan password Anda.' });
      }

      // Di sini Anda dapat mengimplementasikan logika khusus berdasarkan role
      // Misalnya, redirect ke halaman khusus berdasarkan role

      res.status(200).json({ message: 'Login berhasil', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Terjadi kesalahan saat login' });
    }
  },
};

module.exports = authController;