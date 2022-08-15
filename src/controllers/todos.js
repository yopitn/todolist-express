const knex = require('../database')

// Find All Todo
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

// Find Todo by ID
exports.findById = async (req, res) => {
  const id = req.params.id

  const data = await knex
    .select()
    .where({
      id
    })
    .from('todolist')

  try {
    res.json(data)
  } catch (err) {
    res.json({message: err})
  }
}

// Create Todo
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

// Update Todo
exports.update = async (req, res) => {
  const id = req.params.id

  const data = await knex
  .update(req.body)
  .from('todolist')
  .where({
    id
  })

  try {
    res.json(data)
  } catch (err) {
    res.json({message: err})
  }
}

// Delete Todo
exports.delete = async (req, res) => {
  const id = req.params.id

  const data = await knex
  .del()
  .from('todolist')
  .where({
    id
  })

  try {
    res.json(data)
  } catch (err) {
    res.json({message: err})
  }
}