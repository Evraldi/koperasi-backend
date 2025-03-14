const { Pinjaman } = require('../models');
const { formatDateTimeID, formatCurrencyIDR } = require('../utils/format');

exports.getPinjamanByUser = async (req, res) => {
  try {
    const pinjamanList = await Pinjaman.findAll({
      where: { user_id: req.user.id }
    });

    const formatted = pinjamanList.map(item => ({
      ...item.toJSON(),
      tanggal: formatDateTimeID(item.createdAt),
      pinjaman_umum: formatCurrencyIDR(item.pinjaman_umum),
      pinjaman_khusus: formatCurrencyIDR(item.pinjaman_khusus),
      pinjaman_emergency: formatCurrencyIDR(item.pinjaman_emergency),
      jumlah: formatCurrencyIDR(item.jumlah)
    }));

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data pinjaman' });
  }
};

exports.createPinjaman = async (req, res) => {
  try {
    const pinjaman = await Pinjaman.create({
      ...req.body,
      user_id: req.user.id
    });
    res.status(201).json(pinjaman);
  } catch (error) {
    res.status(400).json({ error: 'Gagal membuat pinjaman' });
  }
};