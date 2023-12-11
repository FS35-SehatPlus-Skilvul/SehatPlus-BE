const express = require('express');
const router = express.Router();
const pembayaranController = require('../controllers/pembayaranController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

router.get('/', authenticate, authorize(["admin"]), pembayaranController.getAllPembayaran);
router.get('/:id', authenticate, pembayaranController.getPembayaranById);
router.post('/', authenticate, authorize(["admin"]), pembayaranController.createPembayaran); 
router.put('/:id', authenticate, authorize(["admin"]), pembayaranController.editPembayaranById);
router.delete('/:id', authenticate, authorize(["admin"]), pembayaranController.deletePembayaranById);

module.exports = router;
