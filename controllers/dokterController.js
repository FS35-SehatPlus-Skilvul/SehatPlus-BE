const { Dokter } = require('../models');

const getAllDokter = async (req, res) => {
  try {
    const allDokter = await Dokter.findAll();

    return res.status(200).json({ data: allDokter });
  } catch (error) {
    console.error('Error getting all Dokter:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getDokterById = async (req, res) => {
  try {
    const dokterId = req.params.id;
    const dokter = await Dokter.findByPk(dokterId);

    if (!dokter) {
      return res.status(404).json({ message: 'Dokter not found' });
    }

    return res.status(200).json({ data: dokter });
  } catch (error) {
    console.error('Error getting Dokter by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createDokter = async (req, res) => {
  try {
    const { users_id, nama, gender, spesialisasi, jadwal } = req.body;

    // Validasi data input jika diperlukan

    const newDokter = await Dokter.create({
      users_id,
      nama,
      gender,
      spesialisasi,
      jadwal,
    });

    return res.status(201).json({ message: 'Dokter created successfully', data: newDokter });
  } catch (error) {
    console.error('Error creating Dokter:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editDokterById = async (req, res) => {
  try {
    const dokterId = req.params.id;
    const { users_id, nama, gender, spesialisasi, jadwal } = req.body;

    // Validasi data input jika diperlukan

    const updatedDokter = await Dokter.update(
      { users_id, nama, gender, spesialisasi, jadwal },
      { where: { id: dokterId } }
    );

    if (updatedDokter[0] === 0) {
      return res.status(404).json({ message: 'Dokter not found' });
    }

    return res.status(200).json({ message: 'Dokter updated successfully' });
  } catch (error) {
    console.error('Error editing Dokter:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteDokterById = async (req, res) => {
  try {
    const dokterId = req.params.id;

    const deletedDokter = await Dokter.destroy({ where: { id: dokterId } });

    if (deletedDokter === 0) {
      return res.status(404).json({ message: 'Dokter not found' });
    }

    return res.status(200).json({ message: 'Dokter deleted successfully' });
  } catch (error) {
    console.error('Error deleting Dokter:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllDokter,
  getDokterById,
  createDokter,
  editDokterById,
  deleteDokterById,
};
