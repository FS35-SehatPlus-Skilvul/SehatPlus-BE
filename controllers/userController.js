const { User } = require("../models");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();

      if (users.length === 0) {
        return res
          .status(404)
          .json({ message: "Tidak ada pengguna ditemukan" });
      }
      res.json(users);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat mengambil data pengguna" });
    }
  },
  getUserById: async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: "Pengguna tidak ditemukan" });
      }

      res.json(user);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat mengambil data pengguna" });
    }
  },
  editUserById: async (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, email, password, role } =
      req.body;

    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: "Pengguna tidak ditemukan" });
      }
      if (req.file) {
        user.profil = req.file.filename;
      } else {
        user.profil = req.body.profil || user.profil;
      }
      user.name = username || user.name;
      user.email = email || user.email;
      user.password = password || user.password;
      user.role = role || user.role;

      await user.save();

      res.json(user);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat mengambil data pengguna" });
    }
  },

  deleteUserById: async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: "Pengguna tidak ditemukan" });
      }

      await user.destroy();

      res.json({ message: "Pengguna berhasil dihapus" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat menghapus pengguna" });
    }
  },
};
