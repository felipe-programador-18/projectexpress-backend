const express = require('express')
const router = express.Router()
const controler = require('../controllers/clients')


router.get('/list', controler.list)
router.get('/new', controler.create)


module.exports = router