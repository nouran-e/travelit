const UserModel = require('../models/user');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { user, pwd } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await UserModel.findOne({ username: user });
    if (existingUser) {
      return res.status(409).json({ error: 'Username Taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(pwd, 10);

    // Create a new user
    const newUser = new UserModel({ username: user, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User Registered Successfully' });
  } catch (err) {
    console.error('Error registering user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const loginUser = async (req, res) => {
  const { user, pwd } = req.body;

  try {
    // Find the user by username
    const existingUser = await UserModel.findOne({ username: user });
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(pwd, existingUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Implement your authentication logic here (e.g., generate a token)

    res.json({ message: 'Login Successful' });
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { registerUser, loginUser };