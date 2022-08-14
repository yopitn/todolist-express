const express = require('express')
const router = express.Router()

const controller = require('../controllers')
const service = require('../services')

// Views
router.get('/', service.getTodo)

// API
router.get('/api/todo', controller.findAll)
router.post('/api/todo', controller.create)
router.put('/api/todo', controller.update)
router.delete('/api/todo', controller.delete)

module.exports = router