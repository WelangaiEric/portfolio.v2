const express = require('express');
const morgan = require('morgan');

const app= express();

app.listen(3000)
app.set('view engine','ejs')

// middlewares
app.use(morgan('dev'))
app.use(express.static('public'))

// routes

app.get('/',(req,res)=>{
    res.render('index',{title:'welangai Eric'})
})