const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Definisikan rute-rute untuk Pasien
router.get('/', adminController.getAllAdmin);
router.get('/:id', adminController.getAdminById);
router.post("/", adminController.createAdmin)
router.patch("/:id", adminController.editAdminById); // Perubahan di sini
router.delete("/:id", adminController.deleteAdminById); // Perubahan di sini
// Definisikan rute-rute lainnya sesuai kebutuhan

module.exports = router;