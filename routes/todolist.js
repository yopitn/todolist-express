const express = require('express')
const router = express.Router()

const todolist = require('../models/todolist')

router.get('/', async (req, res) => {
  const data = await todolist.getTodo()
  const json = JSON.stringify(data)
  const todo = JSON.parse(json)
  
  res.render('main', {
    todo: todo
  })
})

router.post('/', async (req, res) => {
  const data = await todolist.createTodo(req.body)

  try {
    res.json(data)
  } catch (err) {
    res.json({message: err})
  }
})

router.put('/', async (req, res) => {
  if (!req.body.id) {
    return res.json({message: "Todo not found!"})
  }

  const data = await todolist.updateTodo(req.body.id, req.body)
  
  try {
    res.json(data)
  } catch (err) {
    res.json({message: err})
  }
})

router.delete('/', async (req, res) => {
  if (!req.body.id) {
    return res.json({message: "Todo not found!"})
  }

  const data = await todolist.deleteTodo(req.body.id)

  try {
    res.json(data)
  } catch (err) {
    res.json({message: err})
  }
})

module.exports = router