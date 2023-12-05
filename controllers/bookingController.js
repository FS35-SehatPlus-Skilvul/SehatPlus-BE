const { Booking } = require('../models');

const getAllBookings = async (req, res) => {
  try {
    const allBookings = await Booking.findAll();

    return res.status(200).json({ data: allBookings });
  } catch (error) {
    console.error('Error getting all bookings:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    return res.status(200).json({ data: booking });
  } catch (error) {
    console.error('Error getting booking by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createBooking = async (req, res) => {
  try {
    const { id_pasien, id_dokter, status } = req.body;

    // Validasi data input jika diperlukan

    const newBooking = await Booking.create({
      id_pasien,
      id_dokter,
      status,
    });

    return res.status(201).json({ message: 'Booking created successfully', data: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editBookingById = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const { id_pasien, id_dokter, status } = req.body;

    // Validasi data input jika diperlukan

    const updatedBooking = await Booking.update(
      { id_pasien, id_dokter, status },
      { where: { id: bookingId } }
    );

    if (updatedBooking[0] === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    return res.status(200).json({ message: 'Booking updated successfully' });
  } catch (error) {
    console.error('Error editing booking:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteBookingById = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const deletedBooking = await Booking.destroy({ where: { id: bookingId } });

    if (deletedBooking === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    return res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  editBookingById,
  deleteBookingById,
};