const express = require('express')
const router = express.Router()

const controllers = require('../controllers')



// API
router.get('/api', controllers.findAll)
router.post('/api', controllers.create)
router.put('/api', controllers.update)
router.delete('/api', controllers.delete)

module.exports = router