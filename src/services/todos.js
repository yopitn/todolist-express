const knex = require('../database')

// Home Page
exports.home = async (req, res) => {
  const data = await knex
    .select()
    .from('todolist')

  res.render('home', {
    title: "TodoApp - ExpressJs",
    status: true,
    home: true,
    todos: data
  })
}

// Create Page
exports.create = (req, res) => {
  res.render('create', {
    status: true
  })
}

// Created Post (Method == POST)
exports.created = async (req, res) => {
  if (!req.body.completed) {
    req.body.completed = false
  }

  await knex
    .insert(req.body)
    .into('todolist')

  res.redirect('/')
}

// Detail Page
exports.detail = async (req, res) => {
  const id = req.params.id
  const data = await knex
    .select()
    .where({
      id
    })
    .from('todolist')

  res.render('detail', {
    title: `${data[0].title} - ExpressJs`,
    status: true,
    todos: {
      id: data[0].id,
      title: data[0].title,
      completed: data[0].completed === 0 ? "No" : "Yes",
      created_at: data[0].created_at,
      text: {
        completed: data[0].completed === 0 ? "Completed" : "Uncompleted"
      }
    }
  })
}

// Update Completed Todo
exports.update = async (req, res) => {
  const id = req.params.id

  const data = await knex
    .select()
    .where({
      id
    })
    .from('todolist')

  const completed = data[0].completed
  let newCompleted
  
  if (completed === 0) {
    newCompleted = {
      "completed" : true
    }
  } else {
    newCompleted = {
      "completed" : false
    }
  }

  await knex
    .update(newCompleted)
    .from('todolist')
    .where({
      id
    })

  res.redirect('/')
}

// Delete Todo
exports.delete = async (req, res) => {
  const id = req.params.id

  await knex
    .del()
    .from('todolist')
    .where({
      id
    })

  res.redirect('/')
}

// 404 or Page not Found
exports.status404 = (req, res) => {
  res.render('404');
}