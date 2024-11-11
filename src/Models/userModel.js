const prisma = require('../prismaClient');

// Function to create a new user
const createUser = async (email, password) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return user;
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

// Function to find a user by email
const findUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    throw new Error('Error finding user: ' + error.message);
  }
};

// Function to get all users (optional, for admin purposes)
const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};

// Function to delete a user (optional, for admin purposes)
const deleteUser = async (userId) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });
    return deletedUser;
  } catch (error) {
    throw new Error('Error deleting user: ' + error.message);
  }
};

module.exports = {
  createUser,
  findUserByEmail,
  getAllUsers,
  deleteUser,
};
