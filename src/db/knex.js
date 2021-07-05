const environment = 'development'
const config = require('../.../knex.js')[environment]
const knex = require('knex')(config)

module.exports = knex
