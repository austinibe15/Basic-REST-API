const express = require('express');
const app = express();
const PORT = 3000;

// Import user fields from the separate file
const userFields = require('./userFields');

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory user data
let users = [];

// CREATE - Add a new user
app.post('/users', (req, res) => {
  // Assign fields from the userFields object
  const { name = userFields.name, email = userFields.email, age = userFields.age } = req.body;

  const newUser = { id: users.length + 1, name, email, age };
  users.push(newUser);
  res.status(201).json(newUser);
});

// READ - Get all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// READ - Get a user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
});

// UPDATE - Update user by ID
app.put('/users/:id', (req, res) => {
  const { name = userFields.name, email = userFields.email, age = userFields.age } = req.body;

  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = name || user.name;
  user.email = email || user.email;
  user.age = age || user.age;

  res.status(200).json(user);
});

// DELETE - Delete user by ID
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  const deletedUser = users.splice(userIndex, 1);
  res.status(200).json(deletedUser);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
