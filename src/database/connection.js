const knex = require('knex');
const configurations = require('../../knexfile');

const connetion = knex(configurations.development);

module.exports = connetion;