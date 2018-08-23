//requiring the mongoose library to do db stuff
const mongoose = require("mongoose");

//this is us connecting to our mogod database server
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});

const Show = require('./shows');
// const Character = require('./characters');

module.exports.Show = Show;