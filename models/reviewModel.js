// models/Review.js

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  reviewerName: { type: String },
  rating: { type: Number, max: 10, required: true },
  comments: { type: String, required: true },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
