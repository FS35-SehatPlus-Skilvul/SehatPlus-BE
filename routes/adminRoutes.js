const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.getAllAdmin);
router.get('/:id', adminController.getAdminById);
router.post("/", adminController.createAdmin)
router.patch("/:id", adminController.editAdminById); 
router.delete("/:id", adminController.deleteAdminById); 

module.exports = router;