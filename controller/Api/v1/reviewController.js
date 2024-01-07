const reviewModel = require("../../../models/reviewModel");
const movieModel = require("../../../models/movieModel");

const addReview = async (req,res)=>{
    try {
        const movieId = req.params.movieId;
        const { ...reviewData } = req.body;
    
        // Check if the movieId is valid
        const movie = await movieModel.findById(movieId);
        if (!movie) {
          return res.status(404).json({ error: 'Movie not found' });
        }
    
        // Add the review to the movie
        const review = await reviewModel.create({ movieId, ...reviewData });
    
        // Update the averageRating for the movie
        const reviews = await reviewModel.find({ movieId });
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRating / reviews.length;
    
        await movieModel.findByIdAndUpdate(movieId, { averageRating });
    
        res.status(201).json(review);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
const getReviews =  async (req,res) => {
    try {
        const movieId = req.params.movieId;
    
        // Check if the movieId is valid
        const movie = await movieModel.findById(movieId);
        if (!movie) {
          return res.status(404).json({ error: 'Movie not found' });
        }
    
        // Get all reviews for the specified movie
        const reviews = await reviewModel.find({ movieId });
        res.json(reviews);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
module.exports = {
    addReview,getReviews
};
