const movieModel = require("../../../models/movieModel");
const reviewModel = require("../../../models/reviewModel");

const addMovie = async (req,res)=>{
    try {
        const movie = await movieModel.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getMovies = async (req,res)=>{
    try {
        const movies = await  movieModel.find();
        res.status(201).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const deleteMovie = async (req,res)=>{
    try {
        const movieId = req.params.movieId;
    
        // Check if the movieId is valid
        const movie = await movieModel.findById(movieId);
        if (!movie) {
          return res.status(404).json({ error: 'Movie not found' });
        }
    
        // Delete the movie and its associated reviews
        await movieModel.findByIdAndDelete(movieId);
        await reviewModel.deleteMany({ movieId });
    
        res.json({ message: 'Movie and associated reviews deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
module.exports = {
addMovie,getMovies,deleteMovie
};
