const express = require('express');
const router = express.Router();

const dummyData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '081234567890',
    address: 'Jl. Merdeka No. 1, Bandung, Indonesia'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    phone: '082345678901',
    address: 'Jl. Raya No. 2, Jakarta, Indonesia'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    phone: '083456789012',
    address: 'Jl. Kebon No. 3, Surabaya, Indonesia'
  }
];

// API Endpoint untuk mengambil data dummy
router.get('/dummy', (req, res) => {
  res.status(200).json(dummyData);
});

module.exports = router;