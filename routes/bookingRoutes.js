const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Definisikan rute-rute untuk Pasien
router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.post("/", bookingController.createBooking)
router.patch("/:id", bookingController.editBookingById); // Perubahan di sini
router.delete("/:id", bookingController.deleteBookingById); // Perubahan di sini
// Definisikan rute-rute lainnya sesuai kebutuhan

module.exports = router;