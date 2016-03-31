'use strict';

let express = require('express');
let apiRouter = express.Router();
let hotelsController = require('../controllers/hotels');

apiRouter.route('/hotels')
	.get(hotelsController.findAll)
	.post(hotelsController.create);

apiRouter.route('/hotels/:hotel_id')
	.delete(hotelsController.deleteById)
	.get(hotelsController.getById)
	.put(hotelsController.updateById);


//export router
module.exports = apiRouter;