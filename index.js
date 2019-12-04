const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

express()
.use(express.static(path.join(__dirname, 'public')))
.engine('html', require('ejs').renderFile)
.set('view engine', 'ejs')
.get('/', (req, res) => {res.render('pages/index.ejs')})
.listen(PORT, () => {console.log(`Listening on port ${PORT}...`)});