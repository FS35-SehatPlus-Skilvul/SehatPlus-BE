const { Dokter, Spesialisasi } = require('../models');

const getAllDokter = async (req, res) => {
  try {
    const allDokter = await Dokter.findAll({
      include: [
        { model: Spesialisasi, attributes: ['nama_spesialisasi'] },
      ],
    });

    return res.status(200).json(allDokter);
  } catch (error) {
    console.error('Error getting all Dokter:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getDokterById = async (req, res) => {
  try {
    const dokterId = req.params.id;
    const dokter = await Dokter.findByPk(dokterId, {
      include: [
        { model: Spesialisasi, attributes: ['nama_spesialisasi'] },
      ],
    });

    if (!dokter) {
      return res.status(404).json({ message: 'Dokter not found' });
    }

    return res.status(200).json(dokter);
  } catch (error) {
    console.error('Error getting Dokter by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createDokter = async (req, res) => {
  try {
    const { nama, email, gender, phone, spesialisasi_id } = req.body;

    const newDokter = await Dokter.create({
      nama,
      email,
      gender,
      phone,
      spesialisasi_id,
    });

    return res.status(201).json(newDokter);
  } catch (error) {
    console.error('Error creating Dokter:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editDokterById = async (req, res) => {
  try {
    const dokterId = req.params.id;
    const { nama, email, gender, phone, spesialisasi_id } = req.body;

    const updatedDokter = await Dokter.update(
      { nama, email, gender, phone, spesialisasi_id },
      { where: { id_dokter: dokterId } }
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

    const deletedDokter = await Dokter.destroy({ where: { id_dokter: dokterId } });

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
