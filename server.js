'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8080;


//open database configuration and connection
require('./api/config/database');

//middleware for formatting requests data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set router
let apiRouter = require('./api/routes/index');
app.use('/api', apiRouter);

//start server
app.listen(port);
console.log('Server started on port ' + port);