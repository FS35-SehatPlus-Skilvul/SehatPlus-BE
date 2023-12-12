const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/', authenticate, adminController.getAllAdmin);
router.get('/:id', authenticate, adminController.getAdminById);
router.post("/", authenticate, adminController.createAdmin)
router.patch("/:id", authenticate, adminController.editAdminById); 
router.delete("/:id", authenticate, adminController.deleteAdminById); 

module.exports = router;