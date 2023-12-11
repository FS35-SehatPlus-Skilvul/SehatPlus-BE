const express = require('express');
const router = express.Router();
const dokterController = require('../controllers/dokterController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

router.get('/', dokterController.getAllDokter);
router.get('/:id', dokterController.getDokterById);
router.post('/', authenticate, authorize(['admin']), dokterController.createDokter);
router.patch('/:id', authenticate, authorize(['admin']), dokterController.editDokterById);
router.delete('/:id', authenticate, authorize(['admin']), dokterController.deleteDokterById);

module.exports = router;
