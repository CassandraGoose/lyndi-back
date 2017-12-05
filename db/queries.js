var knex = require('./knex')

module.exports = {
  getAll() {
    return knex('comment').orderBy('created_at', 'desc')
  },
  create(comment) {
    return knex('comment').insert(comment, '*')
  },
  delete(id) {
    return knex('comment').where('id', id).del()
  }
}
