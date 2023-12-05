const { Pasien } = require('../models');

const getAllPasien = async (req, res) => {
  try {
    const allPasien = await Pasien.findAll();

    return res.status(200).json( allPasien );
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

    return res.status(200).json( pasien );
  } catch (error) {
    console.error('Error getting Pasien by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editPasienById = async (req, res) => {
  try {
    const pasienId = req.params.id;
    const { nama, gender, phone } = req.body;

    // Validasi data input jika diperlukan

    const updatedPasien = await Pasien.update(
      { nama, gender, phone },
      { where: { id: pasienId } }
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

    const deletedPasien = await Pasien.destroy({ where: { id: pasienId } });

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
  editPasienById,
  deletePasienById,
};