const { Admin } = require('../models');

const getAllAdmin = async (req, res) => {
  try {
    const allAdmin = await Admin.findAll();

    return res.status(200).json({ data: allAdmin });
  } catch (error) {
    console.error('Error getting all Admin:', error);
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

    return res.status(200).json({ data: admin });
  } catch (error) {
    console.error('Error getting Admin by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createAdmin = async (req, res) => {
  try {
    const { users_id } = req.body;

    // Validasi data input jika diperlukan

    const newAdmin = await Admin.create({
      users_id,
    });

    return res.status(201).json({ message: 'Admin created successfully', data: newAdmin });
  } catch (error) {
    console.error('Error creating Admin:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const { users_id } = req.body;

    // Validasi data input jika diperlukan

    const updatedAdmin = await Admin.update(
      { users_id },
      { where: { id: adminId } }
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

    const deletedAdmin = await Admin.destroy({ where: { id: adminId } });

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
  getAllAdmin,
  getAdminById,
  createAdmin,
  editAdminById,
  deleteAdminById,
};
