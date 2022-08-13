/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('todolist', t => {
      t.increments('id');
      t.string('title')
        .notNullable();
      t.boolean('completed')
        .notNullable();
      t.timestamp('created_at')
        .defaultTo(knex.fn.now())
      t.timestamp('updated_at')
        .defaultTo(knex.fn.now())
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('todolist')
};
