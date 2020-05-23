const express = require('express');
const routes = express.Router();

const PatientHistoryController = require('./controllers/PatientHistoryController');

routes.get('/patient-controller', PatientHistoryController.index);
routes.post('/patient-controller', PatientHistoryController.create);

module.exports = routes;