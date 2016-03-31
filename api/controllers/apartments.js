'use strict';

let mongoose = require('mongoose');
let Apartment = mongoose.model('ApartmentModel');

module.exports.findByHotel = function(req, res)
{
	let hotelId = req.params.hotel_id;

	Apartment.find({hotelId: hotelId},(err, apartments) => {
		if(err) res.send(err);
		res.json(apartments);
	})
};

module.exports.create = function(req, res)
{
	let apartment = new Apartment();
	apartment.code = req.body.code;
	apartment.roomsAmount = req.body.roomsAmount;
	apartment.hotelId = req.params.hotel_id;

	apartment.save(err => {
		if(err) res.send(err);
		res.json({message:'Apartment created!'});
	})
};


module.exports.getById = function(req, res) {
	let id = req.params.apartment_id;
	Apartment.findById(id, (err, apartment) => {
		if(err) res.send(err);
		res.json(apartment);
	});
};

module.exports.updateById = function(req, res) 
{
	let id = req.params.apartment_id;
	Apartment.findById(id, (err, apartment) => {
		if(err) res.send(err);

		apartment.code = req.body.code;
		apartment.roomsAmount = req.body.roomsAmount;
		apartment.hotelId = req.params.hotel_id;

		apartment.save(err => {
			if(err) res.send(err);
			res.json({message: 'Apartment updated'});
		})
	});
};

module.exports.deleteById = function(req, res)
{
	let id = req.params.apartment_id;
	Apartment.remove({_id: id }, (err, apartment) => {
		if(err) res.send(err);
		res.json({message: 'Apartment deleted successfully!'});
	});
}
