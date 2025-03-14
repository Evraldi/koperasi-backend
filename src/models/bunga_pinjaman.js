module.exports = (sequelize, DataTypes) => {
  const BungaPinjaman = sequelize.define('BungaPinjaman', {
    pinjaman_umum: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 0
    },
    pinjaman_khusus: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 0
    },
    pinjaman_emergency: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 0
    }
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'bunga_pinjaman'
  });

  return BungaPinjaman;
};