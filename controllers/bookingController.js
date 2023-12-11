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
    const { pasien_id, dokter_id, tanggal, jam_mulai, jam_selesai } = req.body;


    const newBooking = await Booking.create({
      pasien_id,
      dokter_id,
      tanggal,
      jam_mulai,
      jam_selesai,
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
    const { pasien_id, dokter_id, tanggal, jam_mulai, jam_selesai } = req.body;


    const updatedBooking = await Booking.update(
      { pasien_id, dokter_id, tanggal, jam_mulai, jam_selesai },
      { where: { id_booking: bookingId } }
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

    const deletedBooking = await Booking.destroy({ where: { id_booking: bookingId } });

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
