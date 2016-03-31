'use strict';

let mongoose = require('mongoose');

let hotelSchema = new mongoose.Schema({
	name: String,
	apartments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Apartment'}]
});

//register model
mongoose.model('HotelModel', hotelSchema);