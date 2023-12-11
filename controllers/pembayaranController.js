const { Pembayaran } = require('../models');

const getAllPembayaran = async (req, res) => {
  try {
    const allPembayaran = await Pembayaran.findAll();

    return res.status(200).json({ data: allPembayaran });
  } catch (error) {
    console.error('Error getting all pembayaran:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getPembayaranById = async (req, res) => {
  try {
    const pembayaranId = req.params.id;
    const pembayaran = await Pembayaran.findByPk(pembayaranId);

    if (!pembayaran) {
      return res.status(404).json({ message: 'Pembayaran not found' });
    }

    return res.status(200).json({ data: pembayaran });
  } catch (error) {
    console.error('Error getting pembayaran by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createPembayaran = async (req, res) => {
  try {
    const { booking_id, metode_pembayaran, total_pembayaran } = req.body;

    const newPembayaran = await Pembayaran.create({
      booking_id,
      metode_pembayaran,
      total_pembayaran,
    });

    return res.status(201).json({ message: 'Pembayaran created successfully', data: newPembayaran });
  } catch (error) {
    console.error('Error creating pembayaran:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editPembayaranById = async (req, res) => {
  try {
    const pembayaranId = req.params.id;
    const { booking_id, metode_pembayaran, total_pembayaran } = req.body;

    const updatedPembayaran = await Pembayaran.update(
      { booking_id, metode_pembayaran, total_pembayaran },
      { where: { id_pembayaran: pembayaranId } }
    );

    if (updatedPembayaran[0] === 0) {
      return res.status(404).json({ message: 'Pembayaran not found' });
    }

    return res.status(200).json({ message: 'Pembayaran updated successfully' });
  } catch (error) {
    console.error('Error editing pembayaran:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deletePembayaranById = async (req, res) => {
  try {
    const pembayaranId = req.params.id;

    const deletedPembayaran = await Pembayaran.destroy({ where: { id_pembayaran: pembayaranId } });

    if (deletedPembayaran === 0) {
      return res.status(404).json({ message: 'Pembayaran not found' });
    }

    return res.status(200).json({ message: 'Pembayaran deleted successfully' });
  } catch (error) {
    console.error('Error deleting pembayaran:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPembayaran,
  getPembayaranById,
  createPembayaran,
  editPembayaranById,
  deletePembayaranById,
};
