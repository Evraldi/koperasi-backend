module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Simpanan', {
      tanggal: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      keterangan: DataTypes.TEXT,
      pokok: {
        type: DataTypes.DECIMAL(15,2),
        defaultValue: 0
      },
      wajib: {
        type: DataTypes.DECIMAL(15,2),
        defaultValue: 0
      },
      sukarela: {
        type: DataTypes.DECIMAL(15,2),
        defaultValue: 0
      },
      sihara: {
        type: DataTypes.DECIMAL(15,2),
        defaultValue: 0
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      timestamps: true,
      underscored: true,
      tableName: 'simpanan'
    });
  };