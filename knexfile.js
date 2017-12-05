// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/lyndi'
  },
  production: {
    client: 'postgresql',
    connection: 'somethinghere'
  }
}
