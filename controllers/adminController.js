const { Admin } = require('../models');
const bcrypt = require('bcryptjs');

const getAllAdmins = async (req, res) => {
  try {
    const allAdmins = await Admin.findAll();

    return res.status(200).json(allAdmins);
  } catch (error) {
    console.error('Error getting all Admins:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const admin = await Admin.findByPk(adminId);

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    return res.status(200).json(admin);
  } catch (error) {
    console.error('Error getting Admin by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createAdmin = async (req, res) => {
  try {
    const { nama, email, gender, phone, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newAdmin = await Admin.create({
      nama,
      email,
      gender,
      phone,
      password: hashedPassword,
    });

    return res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
  } catch (error) {
    console.error('Error creating Admin:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const { nama, email, gender, phone } = req.body;

    const updatedAdmin = await Admin.update(
      { nama, email, gender, phone },
      { where: { id_admin: adminId } }
    );

    if (updatedAdmin[0] === 0) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    return res.status(200).json({ message: 'Admin updated successfully' });
  } catch (error) {
    console.error('Error editing Admin:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;

    const deletedAdmin = await Admin.destroy({ where: { id_admin: adminId } });

    if (deletedAdmin === 0) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    return res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting Admin:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllAdmins,
  getAdminById,
  createAdmin,
  editAdminById,
  deleteAdminById,
};
