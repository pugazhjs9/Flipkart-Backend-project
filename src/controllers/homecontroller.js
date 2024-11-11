const prisma = require('../prismaClient');

const getHomePageData = async (req, res) => {
  try {
    const songs = await prisma.song.findMany({ take: 10 });  // Example: get 10 songs
    res.json({ songs });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching homepage data' });
  }
};

module.exports = { getHomePageData };
