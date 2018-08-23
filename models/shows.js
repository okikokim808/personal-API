const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ShowSchema = new Schema({
    type: String,
    name: String,
    description: String,
    episodes: Number,
    seasons: Number,
    active: Boolean,
    characters: [{}]
});

const Show = mongoose.model('Show', ShowSchema);

module.exports = Show;
