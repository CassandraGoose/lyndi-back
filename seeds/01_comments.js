
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
          id: 1,
          name: 'Anonymous',
          comment: 'Lyndi is always there when you need her.'
        },
        {
          id: 2,
          name: 'Panzer',
          comment: 'Boof. Woof woof woof!'
        },
        {id: 3,
          comment: 'I am testing this thing. '
        }
      ]);
    });
};
