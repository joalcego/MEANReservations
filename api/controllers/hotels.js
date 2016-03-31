'use strict';

let mongoose = require('mongoose');
let Hotel = mongoose.model('HotelModel');

module.exports.findAll = function(req, res)
{
	Hotel.find((err, customers) => {
		if(err) res.send(err);
		res.json(customers);
	})
};

module.exports.create = function(req, res)
{
	let hotel = new Hotel();
	hotel.name = req.body.name;

	hotel.save(err => {
		if(err) res.send(err);
		res.json({message:'Hotel created!'});
	})
};


module.exports.getById = function(req, res) {
	let id = req.params.hotel_id;
	Hotel.findById(id, (err, hotel) => {
		if(err) res.send(err);
		res.json(hotel);
	});
};

module.exports.updateById = function(req, res) 
{
	let id = req.params.hotel_id;
	Hotel.findById(id, (err, hotel) => {
		if(err) res.send(err);

		hotel.name = req.body.name;

		hotel.save(err => {
			if(err) res.send(err);
			res.json({message: 'Hotel updated'});
		})
	});
};

module.exports.deleteById = function(req, res)
{
	let id = req.params.hotel_id;
	Hotel.remove({_id: id }, (err, hotel) => {
		if(err) res.send(err);
		res.json({message: 'Hotel deleted successfully!'});
	});
}