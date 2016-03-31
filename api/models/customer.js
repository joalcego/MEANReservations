'use strict';

let mongoose = require('mongoose');

let customerSchema = new mongoose.Schema({
	id : String,
	firstName : String,
	lastName : String,
	phoneNumber : String,
	hotelId: {type: mongoose.Schema.Types.ObjectId, ref: 'HotelModel'},
});

//register model
mongoose.model('CustomerModel', customerSchema);