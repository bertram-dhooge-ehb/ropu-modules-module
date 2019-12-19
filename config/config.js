const dotenv = require('dotenv');
dotenv.config();


const db= process.env.NODE_ENV;

module.exports =
{
  "development": {
    "username": process.env.user,
    "password": process.env.password,
    "database": process.env.database,
    "host": process.env.host,
    "dialect": "mysql",
    
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "ropu_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}


// let sequelize = new Sequelize(this.db.database,this.db.username,this.db.password,{
//   host: this.db.host,
//   dialect: this.db.dialect,

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });


