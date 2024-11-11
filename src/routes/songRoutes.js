const express = require('express');
const { getAllSongs, addSong, updateSong, deleteSong } = require('../controllers/songcontroller');
const router = express.Router();
const authMiddleware = require('../MiddleWares/authMiddleware');

// Routes for song operations
router.get('/songs', authMiddleware, getAllSongs);
router.post('/songs', authMiddleware, addSong);
router.put('/songs/:id', authMiddleware, updateSong);    // Update a specific song by ID
router.delete('/songs/:id', authMiddleware, deleteSong); // Delete a specific song by ID

module.exports = router;
