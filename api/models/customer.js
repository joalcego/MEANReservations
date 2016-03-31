'use strict';

let mongoose = require('mongoose');

let customerSchema = new mongoose.Schema({
	id = String,
	firstName = String,
	lastName = String,
	phoneNumber = String
});

//register model
mongoose.model('CustomerModel', customerSchema);