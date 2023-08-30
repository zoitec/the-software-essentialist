import express from 'express';
import bodyParser from 'body-parser';
import { createConnection, Connection } from 'typeorm';
import { User } from './entities/User'; // Import your User entity class

// Create an Express app
const app = express();
const port = 3000; // Change this to the desired port

// Parse JSON requests
app.use(bodyParser.json());

// Define a route to handle POST requests
app.post('/createUser', async (req, res) => {
  try {
    const { username, email } = req.body;

    // Create a connection to the database
    const connection: Connection = await createConnection();

    // Create a new User entity
    const user = new User();
    user.username = username;
    user.email = email;

    // Save the user to the database
    await connection.manager.save(user);

    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating user.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
