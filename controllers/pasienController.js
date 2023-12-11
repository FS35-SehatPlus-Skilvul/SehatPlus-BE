const { Pasien } = require('../models');
const bcrypt = require('bcryptjs');

const getAllPasien = async (req, res) => {
  try {
    const allPasien = await Pasien.findAll();

    return res.status(200).json(allPasien);
  } catch (error) {
    console.error('Error getting all Pasien:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getPasienById = async (req, res) => {
  try {
    const pasienId = req.params.id;
    const pasien = await Pasien.findByPk(pasienId);

    if (!pasien) {
      return res.status(404).json({ message: 'Pasien not found' });
    }

    return res.status(200).json(pasien);
  } catch (error) {
    console.error('Error getting Pasien by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createPasien = async (req, res) => {
  try {
    const { nama, email, gender, phone, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newPasien = await Pasien.create({
      nama,
      email,
      gender,
      phone,
      password: hashedPassword,
    });

    return res.status(201).json(newPasien);
  } catch (error) {
    console.error('Error creating Pasien:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editPasienById = async (req, res) => {
  try {
    const pasienId = req.params.id;
    const { nama, email, gender, phone } = req.body;

    const updatedPasien = await Pasien.update(
      { nama, email, gender, phone },
      { where: { id_pasien: pasienId } }
    );

    if (updatedPasien[0] === 0) {
      return res.status(404).json({ message: 'Pasien not found' });
    }

    return res.status(200).json({ message: 'Pasien updated successfully' });
  } catch (error) {
    console.error('Error editing Pasien:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deletePasienById = async (req, res) => {
  try {
    const pasienId = req.params.id;

    const deletedPasien = await Pasien.destroy({ where: { id_pasien: pasienId } });

    if (deletedPasien === 0) {
      return res.status(404).json({ message: 'Pasien not found' });
    }

    return res.status(200).json({ message: 'Pasien deleted successfully' });
  } catch (error) {
    console.error('Error deleting Pasien:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPasien,
  getPasienById,
  createPasien,
  editPasienById,
  deletePasienById,
};
