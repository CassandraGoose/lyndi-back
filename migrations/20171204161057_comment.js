
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('comment', function(table) {
      table.increments('id').primary()
      table.string('name').defaultTo('Anonymous')
      table.string('comment')
      table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('comment')
};
