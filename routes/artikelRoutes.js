const express = require('express');
const router = express.Router();
const artikelController = require('../controllers/artikelController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

// Definisikan rute-rute untuk Pasien
router.get('/', artikelController.getAllArtikels);
router.get('/:id', artikelController.getArtikelById);
router.post("/", authenticate, authorize(["admin"]), artikelController.createArtikel)
router.patch("/:id", authenticate, authorize(["admin"]), artikelController.editArtikelById); // Perubahan di sini
router.delete("/:id", authenticate, authorize(["admin"]), artikelController.deleteArtikelById); // Perubahan di sini
// Definisikan rute-rute lainnya sesuai kebutuhan

module.exports = router;