'use strict';

let mongoose = require('mongoose');

let reservationSchema = new mongoose.Schema({
	number: Number,
	checkInDate: Date,
	checkOutDate: Date,
	customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'CustomerModel'},
	apartmentId: {type: mongoose.Schema.Types.ObjectId, ref: 'ApartmentModel'},
	hotelId: {type: mongoose.Schema.Types.ObjectId, ref: 'HotelModel'},
});

//register model
mongoose.model('ReservationModel', reservationSchema);