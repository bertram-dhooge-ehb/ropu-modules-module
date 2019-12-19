const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'http://dt5.ehb.be/1920JAVAADV014',
  user: '1920JAVAADV014',
  database: '1920JAVAADV014',
  password: '92478351',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
