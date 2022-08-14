const knex = require('../database')

exports.findAll = async (req, res) => {
  const data = await knex
    .select()
    .from('todolist')

  try {
    res.json(data)
  } catch (err) {
    res.json({message: err})
  }
}

exports.create = async (req, res) => {
  if (!req.body.title) {
    res.json({message: "Title cannot be blank."})
  }

  if (!req.body.completed) {
    req.body.completed = false
  }

  const data = await knex
    .insert(req.body)
    .into('todolist')

  try {
    res.json(data)
  } catch (err) {
    res.json({message: err})
  }
}

exports.update = async (req, res) => {
  const data = await knex
  .update(req.body)
  .from('todolist')
  .where({
    id: req.body.id
  })

  try {
    res.json(data)
  } catch (err) {
    res.json({message: err})
  }
}

exports.delete = async (req, res) => {
  const data = await knex
  .del()
  .from('todolist')
  .where({
    id: req.body.id
  })

  try {
    res.json(data)
  } catch (err) {
    res.json({message: err})
  }
}