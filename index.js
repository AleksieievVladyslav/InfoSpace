const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

express()
.use(cors())
.use(express.static(path.join(__dirname, 'public')))
.engine('html', require('ejs').renderFile)
.set('view engine', 'ejs')
.get('/', (req, res) => {res.render('pages/index.ejs')})
.post('/log/', (req, res) => {console.log('connection');res.send({status: 'ok'})})
.listen(PORT, () => {console.log(`Listening on port ${PORT}...`)});