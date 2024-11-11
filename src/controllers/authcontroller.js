const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../prismaClient');  // Prisma client instance

// Signup function
const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Respond with success message
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).json({ error: 'Error registering user' });
  }
};

// Signin function
const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({ where: { email } });

    // Check if user exists and validate password
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with token
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Error logging in' });
  }
};

module.exports = { signup, signin };
