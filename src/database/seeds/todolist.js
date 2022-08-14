/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todolist').del()
  await knex('todolist').insert([
    {
      id: 1, 
      title: 'Belajar KnexJS',
      completed: false
    },
    {
      id: 2, 
      title: 'Belajar SequelizeJS',
      completed: false
    },
    {
      id: 3, 
      title: 'Belajar ExpressJS',
      completed: false
    },
  ]);
};
