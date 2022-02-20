const express = require('express')
const router = express.Router()
const indexControlle = require('../controllers/index')

router.get('/', indexControlle.home)

router.get('/pagina', indexControlle.Subhome)

router.get('/calcu', indexControlle.calcu)

router.get('/divide', indexControlle.Menos)

router.get('/par/:num', indexControlle.Param)
module.exports = router