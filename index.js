const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

express()
.use(cors())
.use(express.static(path.join(__dirname, 'public')))
.engine('html', require('ejs').renderFile)
.set('view engine', 'ejs')
.get('/', (req, res) => {res.redirect('/login/')})
.get('/login/', (req, res) => {res.render('pages/login.ejs')})
.post('/log/', (req, res) => {res.send({status: 'ok'})})
.listen(PORT, () => {console.log(`Listening on port ${PORT}...`)});