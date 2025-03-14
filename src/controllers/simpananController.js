const { Simpanan } = require('../models');
const { formatDateTimeID, formatCurrencyIDR } = require('../utils/format');

exports.getSimpananByUser = async (req, res) => {
  try {
    const simpananList = await Simpanan.findAll({
      where: { user_id: req.user.id }
    });

    const formatted = simpananList.map(item => ({
      ...item.toJSON(),
      tanggal: formatDateTimeID(item.tanggal),
      pokok: formatCurrencyIDR(item.pokok),
      wajib: formatCurrencyIDR(item.wajib),
      sukarela: formatCurrencyIDR(item.sukarela),
      sihara: formatCurrencyIDR(item.sihara),
      total: formatCurrencyIDR(item.total)
    }));

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data simpanan' });
  }
};

exports.createSimpanan = async (req, res) => {
  try {
    const simpanan = await Simpanan.create({
      ...req.body,
      user_id: req.user.id
    });
    res.status(201).json(simpanan);
  } catch (error) {
    res.status(400).json({ error: 'Gagal menambah simpanan' });
  }
};