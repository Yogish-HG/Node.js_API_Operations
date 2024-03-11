const express = require("express");
const { v4: uuidv4 } = require('uuid');

const app = express();

let userdata = [];

app.use(express.json());

app.get('/users', (req, res) => {
  try {
    if (!userdata.length) {
      res.status(404).json({ message: "No users found", success: false });
    } else {
      res.status(200).json({
        message: "Users retrieved",
        success: true,
        users: userdata.map(user => ({
          id: user.id,
          email: user.email,
          firstName: user.firstName
        }))
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get('/user/:id', (req, res) => {
  try {
    const userId = req.params.id;
    const user = userdata.find(user => user.id === userId);
    if (!user) {
      res.status(404).json({ message: "User not found", success: false });
    } else {
      res.status(200).json({
        message: "User retrieved",
        success: true,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName
        }
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post('/add', (req, res) => {
  try {
    const { email, firstName } = req.body;
    if (!email || !firstName) {
      res.status(400).json({ message: "Missing email or firstName", success: false });
    } else {
      const newUser = { id: uuidv4(), email, firstName };
      userdata.push(newUser);
      res.status(201).json({ message: "User added", success: true });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put('/update/:id', (req, res) => {
  try {
    const userId = req.params.id;
    const { email, firstName } = req.body;
    const user = userdata.find(user => user.id === userId);
    if (!user) {
      res.status(404).json({ message: "User not found", success: false });
    } else if (!email || !firstName) {
      res.status(400).json({ message: "Missing email or firstName", success: false });
    } else {
      user.email = email;
      user.firstName = firstName;
      res.status(200).json({ message: "User updated", success: true });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
