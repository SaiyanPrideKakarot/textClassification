const express = require('express')
const router = express.Router()

const Controller = require('./controller')

router.get('/', Controller.getCategory)
router.post('/add', Controller.addCategory)

module.exports = router
