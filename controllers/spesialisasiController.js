const { Spesialisasi } = require('../models');

const getAllSpesialisasi = async (req, res) => {
  try {
    const allSpesialisasi = await Spesialisasi.findAll();

    return res.status(200).json({ data: allSpesialisasi });
  } catch (error) {
    console.error('Error getting all spesialisasi:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getSpesialisasiById = async (req, res) => {
  const { id } = req.params;
  try {
    const spesialisasi = await Spesialisasi.findByPk(id);

    if (!spesialisasi) {
      return res.status(404).json({ message: 'Spesialisasi not found' });
    }

    return res.status(200).json({ data: spesialisasi });
  } catch (error) {
    console.error('Error getting spesialisasi by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createSpesialisasi = async (req, res) => {
  try {
    const { nama_spesialisasi } = req.body;


    const newSpesialisasi = await Spesialisasi.create({
      nama_spesialisasi,
    });

    return res.status(201).json({ message: 'Spesialisasi created successfully', data: newSpesialisasi });
  } catch (error) {
    console.error('Error creating spesialisasi:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editSpesialisasiById = async (req, res) => {
  try {
    const spesialisasiId = req.params.id;
    const { nama_spesialisasi } = req.body;


    const updatedSpesialisasi = await Spesialisasi.update(
      { nama_spesialisasi },
      { where: { id_spesialisasi: spesialisasiId } }
    );

    if (updatedSpesialisasi[0] === 0) {
      return res.status(404).json({ message: 'Spesialisasi not found' });
    }

    return res.status(200).json({ message: 'Spesialisasi updated successfully' });
  } catch (error) {
    console.error('Error editing spesialisasi:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteSpesialisasiById = async (req, res) => {
  try {
    const spesialisasiId = req.params.id;

    const deletedSpesialisasi = await Spesialisasi.destroy({ where: { id_spesialisasi: spesialisasiId } });

    if (deletedSpesialisasi === 0) {
      return res.status(404).json({ message: 'Spesialisasi not found' });
    }

    return res.status(200).json({ message: 'Spesialisasi deleted successfully' });
  } catch (error) {
    console.error('Error deleting spesialisasi:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllSpesialisasi,
  getSpesialisasiById,
  createSpesialisasi,
  editSpesialisasiById,
  deleteSpesialisasiById,
};
