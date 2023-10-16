const express = require('express');//commonjs
const { hostname } = require('os');

const path = require('path');//commonjs
require('dotenv').config();


const app = express()//app express
const port = process.env.PORT || 3000;//port

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs')

//khai báo route
app.get('/', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})