/**
 * Module contains the database connector.
 */

const mongoose = require('mongoose');
const dbUri = process.env.URI;
const client;

async function connect () {
  client = await mongoose.connect(dbUri);
};

module.exports = client;
