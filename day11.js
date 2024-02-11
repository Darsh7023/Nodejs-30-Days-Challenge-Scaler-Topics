const express = require('express');
const authenticationMiddleware = require('./authenticationMiddleware');
const { generateToken } = require("./jwtUtils")
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.post('/login', (req, res) => {
    const { id, username } = req.body;
    if (!id || !username)
        return res.status(400).json({ message: 'User id and username are required' });
    const user = { id, username };
    const token = generateToken(user);
    res.json({ token });
});

// Protected route
app.get('/protected', authenticationMiddleware, (req, res) => {
  res.send('Protected Route');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
