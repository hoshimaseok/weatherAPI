const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


app.listen(3000, function () {
  console.log('Listening on port 3000')
})