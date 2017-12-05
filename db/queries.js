var knex = require('./knex')

module.exports = {
  getAll() {
    console.log('queriesall');
    return knex('comment')
  },
  create(comment) {
    return knex('comment').insert(comment, '*')
  },
  delete(id) {
    return knex('comment').where('id', id).del()
  }
}
