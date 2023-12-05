const express = require('express');
const router = express.Router();
const artikelController = require('../controllers/artikelController');

// Definisikan rute-rute untuk Pasien
router.get('/', artikelController.getAllArtikels);
router.get('/:id', artikelController.getArtikelById);
router.post("/", artikelController.createArtikel)
router.patch("/:id", artikelController.editArtikelById); // Perubahan di sini
router.delete("/:id", artikelController.deleteArtikelById); // Perubahan di sini
// Definisikan rute-rute lainnya sesuai kebutuhan

module.exports = router;