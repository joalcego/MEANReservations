'use strict';

let express = require('express');
let apiRouter = express.Router();
let hotelsController = require('../controllers/hotels');
let apartmentsController = require('../controllers/apartments');
let customersController = require('../controllers/customers');
let reservationsController = require('../controllers/reservations');


//hotel routes
apiRouter.route('/hotels')
	.get(hotelsController.findAll)
	.post(hotelsController.create);

apiRouter.route('/hotels/:hotel_id')
	.delete(hotelsController.deleteById)
	.get(hotelsController.getById)
	.put(hotelsController.updateById);

//apartment routes
apiRouter.route('/hotels/:hotel_id/apartments')
	.get(apartmentsController.findByHotel)
	.post(apartmentsController.create);

apiRouter.route('/hotels/:hotel_id/apartments/:apartment_id')
	.delete(apartmentsController.deleteById)
	.get(apartmentsController.getById)
	.put(apartmentsController.updateById);

//customer routes
apiRouter.route('/hotels/:hotel_id/customers')
	.get(customersController.findByHotel)
	.post(customersController.create);

apiRouter.route('/hotels/:hotel_id/customers/:customer_id')
	.delete(customersController.deleteById)
	.get(customersController.getById)
	.put(customersController.updateById);

//reservation routes
apiRouter.route('/hotels/:hotel_id/reservations')
	.get(reservationsController.findByHotel)
	.post(reservationsController.create);

apiRouter.route('/hotels/:hotel_id/reservations/:reservation_id')
	.delete(reservationsController.deleteById)
	.get(reservationsController.getById)
	.put(reservationsController.updateById);

apiRouter.route('/hotels/:hotel_id/reservationsQuery')
	.get(reservationsController.findByQuery);


//customer-reservation routes
apiRouter.route('/hotels/:hotel_id/customers/:customer_id/reservations')
	.get(reservationsController.findByCustomer);

//export router
module.exports = apiRouter;