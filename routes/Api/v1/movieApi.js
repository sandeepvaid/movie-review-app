const express = require('express');
const router = express.Router();
const v1MovieController = require("../../../controller/Api/v1");

router.post('/',v1MovieController.addMovie)
router.get('/',v1MovieController.getMovies)
router.delete('/:movieId',v1MovieController.deleteMovie)
module.exports = router;