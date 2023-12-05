const express = require('express');
const router = express.Router();
const dokterController = require('../controllers/dokterController');

// Definisikan rute-rute untuk Pasien
router.get('/', dokterController.getAllDokter);
router.get('/:id', dokterController.getDokterById);
router.post("/", dokterController.createDokter)
router.patch("/:id", dokterController.editDokterById); // Perubahan di sini
router.delete("/:id", dokterController.deleteDokterById); // Perubahan di sini
// Definisikan rute-rute lainnya sesuai kebutuhan

module.exports = router;