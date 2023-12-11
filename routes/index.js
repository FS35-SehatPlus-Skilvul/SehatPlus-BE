const express = require("express");
const router = express.Router();
const auth = require('../routes/authRoutes');
const pasienRoutes = require("./pasienRoutes");
const dokterRoutes = require("./dokterRoutes");
const adminRoutes = require("./adminRoutes");
const bookingRoutes = require("./bookingRoutes");
const artikelRoutes = require("./artikelRoutes");
const spesialisasiRoutes = require("./spesialisasiRoutes");
const pembayaranRoutes = require("./pembayaranRoutes");

router.get('/health-check', (req, res) => {
    res.status(200).json({
        message: 'Connected Successfully to Server'
    });
});

router.use("/artikel", artikelRoutes);
router.use('/auth', auth);
router.use("/spesialisasi", spesialisasiRoutes);
router.use("/pasien", pasienRoutes);
router.use("/dokter", dokterRoutes);
router.use("/admin", adminRoutes);
router.use("/booking", bookingRoutes);
router.use("/pembayaran", pembayaranRoutes);

module.exports = router;
