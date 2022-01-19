const express = require('express')
const api = express()


const poor = 3000
const indexRouter = require('./routes/index')
const clientRouter = require('./routes/clients')
// here i am indicated for used in the apiUse!!!
//api.use is an middleware he intersepta all rules in the passam for rules

// the command use serve to me passar for all requires!!!
//example if  I don't adding and way, he automated going go by very quicky
api.use((req, res, next) => {
    console.log('passou por aqui')
    next()
})


api.use('/', indexRouter)
api.use('/client', clientRouter )




//this is an serveles web!!
//remember i always have adding one door for me listen!!
api.listen(poor, () => console.log('listing other door :' + poor) )