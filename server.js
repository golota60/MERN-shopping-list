require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //allows to take requests and get data from the body

const items = require('./routes/api/items');

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

//Databade mlab config
const db = require('./config/keys').mongoURI;

//connecting to db using mongoose and checking if connected properly
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to the server...'))
  .catch(err => console.log(err));

//use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;
 
app.listen(port, () => console.log(`Server started on port  ${port}`));

//to self:something didn't work, had to whilelist my ip on mongodb atlas
