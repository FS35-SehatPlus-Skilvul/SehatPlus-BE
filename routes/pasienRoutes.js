const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasienController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

router.get('/', authenticate, authorize(["admin"]), pasienController.getAllPasien);
router.get('/:id', authenticate, pasienController.getPasienById);
router.post('/', authenticate, authorize(["admin"]), pasienController.createPasien); 
router.patch('/:id', authenticate, pasienController.editPasienById);
router.delete('/:id', authenticate, authorize(["admin"]), pasienController.deletePasienById);


module.exports = router;
