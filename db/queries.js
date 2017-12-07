var knex = require('./knex')

module.exports = {
  getAll() {
    return knex('comment').orderBy('created_at', 'desc').limit(5)
  },
  getAll2(){
    return knex('comment').orderBy('created_at', 'desc').offset(5)
  },
  getAll3(){
    return knex('comment').orderBy('created_at', 'desc').offset(10)
  },
  getAll4(){
    return knex('comment').orderBy('created_at', 'desc').offset(15)
  },
  getAll5(){
    return knex('comment').orderBy('created_at', 'desc').offset(20)
  },
  create(comment) {
    return knex('comment').insert(comment, '*')
  },
  delete(id) {
    return knex('comment').where('id', id).del()
  }
}
