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
// Update a song
const updateSong = async (req, res) => {
  const { id } = req.params; // song id to update
  const { title, artist, duration } = req.body;

  try {
    const updatedSong = await prisma.song.update({
      where: { id: Number(id) },
      data: { title, artist, duration },
    });
    res.json({ message: 'Song updated successfully', updatedSong });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Error updating song' });
  }
};

// Delete a song
const deleteSong = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.song.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Song deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Error deleting song' });
  }
};

module.exports = { getAllSongs, addSong, updateSong, deleteSong };
