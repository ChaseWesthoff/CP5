exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('IDEAS', function(table) {
      table.increments('id').primary();
      table.string('IDEA');
      table.dateTime('created');
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('IDEAS'),
  ]);
};