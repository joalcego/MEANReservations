'use strict';

//create mongoose object
let mongoose = require('mongoose');

//database url
let dbURI = 'mongodb://localhost/test';

//connect to database
mongoose.connect(dbURI);

//require models
require('../models/customer');
require('../models/reservation');
require('../models/apartment');
