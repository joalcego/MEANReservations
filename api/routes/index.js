'use strict';

let express = require('express');
let apiRouter = express.Router();
let hotelsController = require('../controllers/hotels');
let apartmentsController = require('../controllers/apartments');

apiRouter.route('/hotels')
	.get(hotelsController.findAll)
	.post(hotelsController.create);

apiRouter.route('/hotels/:hotel_id')
	.delete(hotelsController.deleteById)
	.get(hotelsController.getById)
	.put(hotelsController.updateById);


apiRouter.route('/hotels/:hotel_id/apartments')
	.get(apartmentsController.findByHotel)
	.post(apartmentsController.create);

apiRouter.route('/hotels/:hotel_id/apartments/:apartment_id')
	.delete(apartmentsController.deleteById)
	.get(apartmentsController.getById)
	.put(apartmentsController.updateById);


//export router
module.exports = apiRouter;