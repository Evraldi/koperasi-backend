const { User } = require('../models');
const { formatDateTimeID } = require('../utils/format');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: formatDateTimeID(user.createdAt)
    });
  } catch (error) {
    res.status(400).json({ error: 'Gagal registrasi: dimatiin evraldi dbnya ' + error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] }
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil profil' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data user, server dimatiin evraldi' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User tidak ditemukan' });
    }

    await user.destroy();
    res.json({ message: `User ${user.name} berhasil dihapus` });
  } catch (error) {
    res.status(500).json({ error: 'Gagal menghapus user, coba lagi nanti' });
  }
};

exports.updateUser = async (req, res) => {
  try {
      const { id } = req.params;
      const { name, email } = req.body;

      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });

      user.name = name;
      user.email = email;
      await user.save();

      res.json({ message: 'User berhasil diperbarui' });
  } catch (error) {
      res.status(500).json({ error: 'Gagal memperbarui user' });
  }
};