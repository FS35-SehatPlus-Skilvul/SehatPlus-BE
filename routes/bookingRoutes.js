const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

// Definisikan rute-rute untuk Pasien
router.get('/', authenticate, bookingController.getAllBookings);
router.get('/:id', authenticate, bookingController.getBookingById);
router.post("/", authenticate, authorize(["pasien"]), bookingController.createBooking)
router.patch("/:id", authenticate, authorize(["admin"]), bookingController.editBookingById); // Perubahan di sini
router.delete("/:id", authenticate, authorize(["admin"]), bookingController.deleteBookingById); // Perubahan di sini
// Definisikan rute-rute lainnya sesuai kebutuhan

module.exports = router;