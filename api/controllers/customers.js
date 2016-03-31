'use strict';

let mongoose = require('mongoose');
let Customer = mongoose.model('CustomerModel');

module.exports.findByHotel = function(req, res)
{
	let hotelId = req.params.hotel_id;
	Customer.find({hotelId: hotelId},(err, customers) => {
		if(err) res.send(err);
		res.json(customers);
	})
};

module.exports.create = function(req, res)
{
	let customer = new Customer();
	customer.id = req.body.id;
	customer.firstName = req.body.firstName;
	customer.lastName = req.body.lastName;
	customer.phoneNumber = req.body.phoneNumber;
	customer.hotelId = req.params.hotel_id;

	customer.save(err => {
		if(err) res.send(err);
		res.json({message:'Customer created!'});
	})
};

module.exports.getById = function(req, res) {
	let id = req.params.customer_id;
	Customer.findById(id, (err, customer) => {
		if(err) res.send(err);
		res.json(customer);
	});
};

module.exports.updateById = function(req, res) 
{
	let id = req.params.customer_id;
	Customer.findById(id, (err, customer) => {
		if(err) res.send(err);

		customer.id = req.body.id;
		customer.firstName = req.body.firstName;
		customer.lastName = req.body.lastName;
		customer.phoneNumber = req.body.phoneNumber;
		customer.hotelId = req.params.hotel_id;

		customer.save(err => {
			if(err) res.send(err);
			res.json({message: 'Customer updated'});
		})
	});
};

module.exports.deleteById = function(req, res)
{
	let id = req.params.customer_id;
	Customer.remove({_id: id }, (err, customer) => {
		if(err) res.send(err);
		res.json({message: 'Customer deleted successfully!'});
	});
}
