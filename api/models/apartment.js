'use strict';

let mongoose = require('mongoose');
let ReservationSchema = require('reservation');

let apartmentSchema = new mongoose.Schema({
	code: String,
	roomsAmount: Number,
	reservations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reservation'}]
});

//register model
mongoose.model('ApartmentModel', apartmentSchema);