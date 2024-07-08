// backend/config/db.config.js
module.exports = {
    HOST: "localhost",
    USER: "your_mysql_username",
    PASSWORD: "your_mysql_password",
    DB: "refer_and_earn_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  