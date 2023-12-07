const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes"); 
const auth = require('../routes/authRoutes');
const pasienRoutes = require("./pasienRoutes");
const dokterRoutes = require("./dokterRoutes");
const adminRoutes = require("./adminRoutes");
const bookingRoutes = require("./bookingRoutes");
const artikelRoutes = require("./artikelRoutes");

router.get('/health-check', (req, res) => {
    res.status(200).json({
        message: 'Connected Successfully to Server'
    });
});

// Rute pengguna diarahkan ke file rute terkait pengguna
router.use('/auth', auth);
router.use("/users", userRoutes);
router.use("/pasien", pasienRoutes);
router.use("/dokter", dokterRoutes);
router.use("/admin", adminRoutes);
router.use("/booking", bookingRoutes);
router.use("/artikel", artikelRoutes);

module.exports = router;
