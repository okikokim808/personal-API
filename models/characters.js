const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    description: String,
    power: Number,
    quotes: Number,
    isAlive: Boolean
});

const Character = mongoose.model('Show', CharacterSchema);

// module.exports = Character;