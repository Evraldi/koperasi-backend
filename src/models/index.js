const { Sequelize } = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'postgres',
    logging: false,
    timezone: 'Asia/Jakarta'
  }
);

const models = {
  User: require('./user')(sequelize, Sequelize),
  Simpanan: require('./simpanan')(sequelize, Sequelize),
  Pinjaman: require('./pinjaman')(sequelize, Sequelize),
  BungaPinjaman: require('./bunga_pinjaman')(sequelize, Sequelize)
};

models.User.hasMany(models.Simpanan, { foreignKey: 'user_id' });
models.Simpanan.belongsTo(models.User, { foreignKey: 'user_id' });

models.User.hasMany(models.Pinjaman, { foreignKey: 'user_id' });
models.Pinjaman.belongsTo(models.User, { foreignKey: 'user_id' });

module.exports = { ...models, sequelize };