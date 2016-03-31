'use strict';

let mongoose = require('mongoose');
let Reservation = mongoose.model('ReservationModel');

module.exports.findByHotel = function(req, res)
{
	let hotelId = req.params.hotel_id;

	Reservation.find({hotelId: hotelId},(err, reservations) => {
		if(err) res.send(err);
		res.json(reservations);
	})
};

module.exports.create = function(req, res)
{
	let reservation = new Reservation();
	reservation.number = req.body.number;
	reservation.checkInDate = req.body.checkInDate;
	reservation.checkOutDate = req.body.checkOutDate;
	reservation.customerId = req.body.customerId;
	reservation.apartmentId = req.body.apartmentId;
	reservation.hotelId = req.params.hotel_id;

	reservation.save(err => {
		if(err) res.send(err);
		res.json({message:'Reservation created!'});
	})
};


module.exports.getById = function(req, res) {
	let id = req.params.reservation_id;
	Reservation.findById(id, (err, reservation) => {
		if(err) res.send(err);
		res.json(reservation);
	});
};

module.exports.findByCustomer = function(req, res) {
	let hotelId = req.params.hotel_id;
	let customerId = req.params.customer_id;
	Reservation.find({customerId: customerId, hotelId: hotelId}, (err, reservations) => {
		if(err) res.send(err);
		res.json(reservations);
	});
};

module.exports.findByQuery = function(req, res) {
	let hotelId = req.params.hotel_id;
	let targetDate = req.query.date;
	Reservation.find(
		{
			$and:[
				{"checkInDate" : { $lte : new Date(targetDate) }},
				{"checkOutDate" : { $gte : new Date(targetDate) }}
				], 
			hotelId:hotelId
		}, (err, reservations) => {
		if(err) res.send(err);
		res.json(reservations);
	});
};

module.exports.updateById = function(req, res) 
{
	let id = req.params.reservation_id;
	Reservation.findById(id, (err, reservation) => {
		if(err) res.send(err);

		reservation.number = req.body.number;
		reservation.checkInDate = req.body.checkInDate;
		reservation.checkOutDate = req.body.checkOutDate;
		reservation.customerId = req.body.customerId;
		reservation.apartmentId = req.body.apartmentId;
		reservation.hotelId = req.params.hotel_id;

		reservation.save(err => {
			if(err) res.send(err);
			res.json({message: 'Reservation updated'});
		})
	});
};

module.exports.deleteById = function(req, res)
{
	let id = req.params.reservation_id;
	Reservation.remove({_id: id }, (err, reservation) => {
		if(err) res.send(err);
		res.json({message: 'Reservation deleted successfully!'});
	});
}
