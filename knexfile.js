const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/lyndi'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
}
