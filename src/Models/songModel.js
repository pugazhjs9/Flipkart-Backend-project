const prisma = require('../prismaClient'); // Prisma client instance

// Function to create a new song
const createSong = async (title, artist, duration, userId) => {
  try {
    const song = await prisma.song.create({
      data: {
        title,
        artist,
        duration,
        userId,  // Associate the song with a user
      },
    });
    return song;
  } catch (error) {
    throw new Error('Error creating song: ' + error.message);
  }
};

// Function to get all songs
const getAllSongs = async () => {
  try {
    const songs = await prisma.song.findMany();
    return songs;
  } catch (error) {
    throw new Error('Error fetching songs: ' + error.message);
  }
};

// Function to get a song by ID
const getSongById = async (id) => {
  try {
    const song = await prisma.song.findUnique({
      where: { id },
    });
    return song;
  } catch (error) {
    throw new Error('Error fetching song: ' + error.message);
  }
};

// Function to update a song by ID
const updateSong = async (id, data) => {
  try {
    const updatedSong = await prisma.song.update({
      where: { id },
      data,
    });
    return updatedSong;
  } catch (error) {
    throw new Error('Error updating song: ' + error.message);
  }
};

// Function to delete a song by ID
const deleteSong = async (id) => {
  try {
    const deletedSong = await prisma.song.delete({
      where: { id },
    });
    return deletedSong;
  } catch (error) {
    throw new Error('Error deleting song: ' + error.message);
  }
};

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
};
