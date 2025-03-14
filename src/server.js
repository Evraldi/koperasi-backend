const express = require('express');
const path = require('path');
const app = require('../src/app');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Koperasi Hegar' });
});

app.listen(8080, () => {
  console.log('🚀 Server berjalan di http://localhost:8080');
});