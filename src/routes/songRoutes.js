const express = require('express');
const { getAllSongs, addSong } = require('../controllers/songcontroller');
const router = express.Router();
const authMiddleware = require('../MiddleWares/authMiddleware');

router.get('/songs', authMiddleware, getAllSongs);
router.post('/songs', authMiddleware, addSong);

module.exports = router;
