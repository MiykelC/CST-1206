const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult} = require('express-validator')
const { name } = require('ejs')
const app = express()
const PORT = 5000

app.set('view engine', 'ejs');



app.get('', (req, res)=> {
  res.render('index')
})

app.get('/register', (req, res)=> {
  res.render('register')
})

app.post('/register', (req, res) => {
  res.render('success',{name: name})
})

app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
})