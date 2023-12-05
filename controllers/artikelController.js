const { Artikel } = require('../models');

const getAllArtikels = async (req, res) => {
  try {
    const allArtikels = await Artikel.findAll();

    return res.status(200).json( allArtikels );
  } catch (error) {
    console.error('Error getting all Artikels:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getArtikelById = async (req, res) => {
  try {
    const artikelId = req.params.id;
    const artikel = await Artikel.findByPk(artikelId);

    if (!artikel) {
      return res.status(404).json({ message: 'Artikel not found' });
    }

    return res.status(200).json( artikel );
  } catch (error) {
    console.error('Error getting Artikel by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createArtikel = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validasi data input jika diperlukan

    const newArtikel = await Artikel.create({
      title,
      content,
    });

    return res.status(201).json({ message: 'Artikel created successfully', data: newArtikel });
  } catch (error) {
    console.error('Error creating Artikel:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editArtikelById = async (req, res) => {
  try {
    const artikelId = req.params.id;
    const { title, content } = req.body;

    // Validasi data input jika diperlukan

    const updatedArtikel = await Artikel.update(
      { title, content },
      { where: { id: artikelId } }
    );

    if (updatedArtikel[0] === 0) {
      return res.status(404).json({ message: 'Artikel not found' });
    }

    return res.status(200).json({ message: 'Artikel updated successfully' });
  } catch (error) {
    console.error('Error editing Artikel:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteArtikelById = async (req, res) => {
  try {
    const artikelId = req.params.id;

    const deletedArtikel = await Artikel.destroy({ where: { id: artikelId } });

    if (deletedArtikel === 0) {
      return res.status(404).json({ message: 'Artikel not found' });
    }

    return res.status(200).json({ message: 'Artikel deleted successfully' });
  } catch (error) {
    console.error('Error deleting Artikel:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllArtikels,
  getArtikelById,
  createArtikel,
  editArtikelById,
  deleteArtikelById,
};