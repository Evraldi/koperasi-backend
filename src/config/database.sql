-- Buat tabel users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'member',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Buat tabel simpanan
CREATE TABLE simpanan (
  id SERIAL PRIMARY KEY,
  tanggal DATE NOT NULL,
  keterangan TEXT,
  pokok DECIMAL(15,2) DEFAULT 0,
  wajib DECIMAL(15,2) DEFAULT 0,
  sukarela DECIMAL(15,2) DEFAULT 0,
  sihara DECIMAL(15,2) DEFAULT 0,
  total DECIMAL(15,2) GENERATED ALWAYS AS (pokok + wajib + sukarela + sihara) STORED,
  user_id INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Buat tabel pinjaman
CREATE TABLE pinjaman (
  id SERIAL PRIMARY KEY,
  keterangan TEXT,
  pinjaman_umum DECIMAL(15,2) DEFAULT 0,
  pinjaman_khusus DECIMAL(15,2) DEFAULT 0,
  pinjaman_emergency DECIMAL(15,2) DEFAULT 0,
  jumlah DECIMAL(15,2) GENERATED ALWAYS AS (pinjaman_umum + pinjaman_khusus + pinjaman_emergency) STORED,
  user_id INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Buat tabel bunga_pinjaman
CREATE TABLE bunga_pinjaman (
  id SERIAL PRIMARY KEY,
  pinjaman_umum DECIMAL(5,2) DEFAULT 0,
  pinjaman_khusus DECIMAL(5,2) DEFAULT 0,
  pinjaman_emergency DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);