const express = require('express');
const { getHomePageData } = require('../controllers/homecontroller');
const router = express.Router();

router.get('/homepage', getHomePageData);

module.exports = router;
