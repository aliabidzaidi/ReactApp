const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();

//Body Parser  Middleware
app.use(bodyParser.json());

//Routes
const items = require('./routes/api/items.js');

//DB Config
const db = require('./config/keys').mongoURI;

//connect To Mongoose
mongoose
    .connect(db)
    .then(() => console.log('Mongo db Connected ...'))
    .catch(err => console.log('Error connecting to db'+err));

app.use('/api/items',items);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));