const path = require('path')

const knex = require('knex')
const config = require('../knexfile')

const database = knex({
  ...config,
  connection: {
    filename: path.join(__dirname, 'data/todolist-data.db'),
  },
})

module.exports = database