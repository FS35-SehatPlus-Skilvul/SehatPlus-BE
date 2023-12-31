const express = require("express");
const router = express.Router();
const spesialisasiController = require('../controllers/spesialisasiController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

router.get('/', authenticate, spesialisasiController.getAllSpesialisasi);
router.get('/:id', authenticate, spesialisasiController.getSpesialisasiById);
router.post('/', authenticate, authorize(["admin"]), spesialisasiController.createSpesialisasi);
router.put('/:id', authenticate, authorize(["admin"]), spesialisasiController.editSpesialisasiById);
router.delete('/:id', authenticate, authorize(["admin"]), spesialisasiController.deleteSpesialisasiById);

module.exports = router;
