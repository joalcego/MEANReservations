'use strict';

let mongoose = require('mongoose');

let hotelSchema = new mongoose.Schema({
	name: String,
});

//register model
mongoose.model('HotelModel', hotelSchema);