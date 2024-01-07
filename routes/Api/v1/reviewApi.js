const express = require('express');
const router = express.Router();
const v1ReviewController = require("../../../controller/Api/v1");

router.post('/:movieId',v1ReviewController.addReview)
router.get('/:movieId',v1ReviewController.getReviews)

module.exports = router;