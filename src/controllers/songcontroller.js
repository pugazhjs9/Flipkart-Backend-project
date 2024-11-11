const prisma = require('../prismaClient');

const getAllSongs = async (req, res) => {
  try {
    const songs = await prisma.song.findMany();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching songs' });
  }
};

const addSong = async (req, res) => {
  const { title, artist, duration } = req.body;
  try {
    const song = await prisma.song.create({
      data: {
        title,
        artist,
        duration,
        userId: req.user.userId,  // Assuming authMiddleware attaches user object
      },
    });
    res.status(201).json({ message: 'Song added successfully', song });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Error adding song' });
  }
};

module.exports = { getAllSongs, addSong };
