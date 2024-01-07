const express = require('express');
const router = express.Router();

router.use('/movie',require('./movieApi'));
router.use('/review',require('./reviewApi'))
module.exports = router;