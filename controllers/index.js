const home =  (req, res) => {
    res.send(' very bad')
}


const Subhome = (req, res) => {
    res.send(' am expensive')
}

const calcu = (req, res) => {
    console.log(req.query)
     
    if(req.query.num1 && req.query.num2){
        const {num1, num2} = req.query
        const Adding = parseFloat(num1) + parseFloat(num2)
        res.send('the some is:' + Adding)
    }else{
        res.send('calculadora')
    }
}

const Menos = (req, res) =>{
    console.log(req.query)
    if(req.query.one1 && req.query.two2){
        const {one1 , two2} = req.query
        const Divide = parseFloat(one1) - parseFloat(two2)
        res.send('the menos is :' + Divide)
    }else{
        res.send('divide')
    }
}


// here i can use methodo about that query param
const Param = (req, res) =>{
   const isPeer = (req.params.num % 2 ===0)
   if(isPeer){
       res.send('number is peer')
   }else{
      res.send('number is dont equal the peer')
   }
}




module.exports = {
    home,
    Subhome,
    calcu,
    Menos, 
    Param
}