'use strict';

let mongoose = require('mongoose');

let reservationSchema = new mongoose.Schema({
	id: Number,
	checkInDate: Date,
	checkOutDate: Date,
	customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'}
});

//register model
mongoose.model('ReservationModel', reservationSchema);