const knex = require('../database')

const getTodo = () => {
  return knex
    .select()
    .from('todolist')
}

const createTodo = body => {
  return knex
    .insert(body)
    .returning()
    .into('todolist')
}

const updateTodo = (id, body) => {
  return knex
    .update(body)
    .from('todolist')
    .where({
      id
    })
}

const deleteTodo = id => {
  return knex
    .del()
    .from('todolist')
    .where({
      id
    })
}

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
}