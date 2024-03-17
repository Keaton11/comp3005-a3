// Imports the Client class from the pg module
const { Client } = require('pg');

// Creates a new client
// REPLACE THESE VALUES WITH YOUR OWN DATABASE CONNECTION PARAMETERS
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'COMP3005A3',
    user: 'postgres',
    password: 'postgres'
});

module.exports = { client };
