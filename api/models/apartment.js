'use strict';

let mongoose = require('mongoose');

let apartmentSchema = new mongoose.Schema({
	code: String,
	roomsAmount: Number,
	hotelId: {type: mongoose.Schema.Types.ObjectId, ref: 'HotelModel'},
	reservations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reservation'}]
});

//register model
mongoose.model('ApartmentModel', apartmentSchema);