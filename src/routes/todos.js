const express = require('express')
const router = express.Router()

const controller = require('../controllers')
const service = require('../services')

// Views
router.get('/', service.home)
router.post('/', service.created)
router.get('/create', service.create)
router.get('/detail/:id', service.detail)
router.get('/update/:id', service.update)
router.get('/delete/:id', service.delete)

// API
router.get('/api', controller.findAll)
router.get('/api/:id', controller.findById)
router.post('/api', controller.create)
router.put('/api/:id', controller.update)
router.delete('/api/:id', controller.delete)

router.get('*', service.status404);

module.exports = router