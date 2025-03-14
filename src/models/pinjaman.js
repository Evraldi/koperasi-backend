module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Pinjaman', {
    keterangan: {
      type: DataTypes.TEXT
    },
    pinjaman_umum: {
      type: DataTypes.DECIMAL(15,2),
      defaultValue: 0
    },
    pinjaman_khusus: {
      type: DataTypes.DECIMAL(15,2),
      defaultValue: 0
    },
    pinjaman_emergency: {
      type: DataTypes.DECIMAL(15,2),
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'pinjaman'
  });
};