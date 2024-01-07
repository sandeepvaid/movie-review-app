// models/Movie.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  averageRating: { type: Number, max: 10, default: null },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
