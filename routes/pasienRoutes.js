const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasienController');

// Definisikan rute-rute untuk Pasien
router.get('/', pasienController.getAllPasien);
router.get('/:id', pasienController.getPasienById);
router.patch("/:id", pasienController.editPasienById); // Perubahan di sini
router.delete("/:id", pasienController.deletePasienById); // Perubahan di sini
// Definisikan rute-rute lainnya sesuai kebutuhan

module.exports = router;