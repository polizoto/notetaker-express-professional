// const fs = require('fs');
const path = require('path');

const htmlRoutes = require('./routes/htmlRoutes');

const apiRoutes = require('./routes/apiRoutes');

const express = require('express');

const app = express();

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(bodyParser.json())

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });