// Import necessary modules and models
const express = require("express");
const router = express.Router(); // Create an instance of an Express router
const UserInfo = require("../models/UserInfo"); // Import the UserInfo model
const FoodInfo = require("../models/FoodInfo"); // Import the FoodInfo model

// Create user
router.post("/users", async (req, res) => {
  console.log("Received POST request to /api/users"); // Log that a POST request to /api/users has been received
  console.log("Request body:", req.body); // Log the request body
  try {
    // Attempt to create a new user with the data from the request body
    const user = await UserInfo.create(req.body);
    res.json(user); // Respond with the created user in JSON format
  } catch (error) {
    console.error(error); // Log any errors that occur during the process
    res.status(500).json({ error: "Internal Server Error" }); // Respond with a 500 Internal Server Error
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    // Attempt to retrieve all users from the database
    const users = await UserInfo.findAll();
    res.json(users); // Respond with the list of users in JSON format
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get user by ID
router.get("/users/:id", async (req, res) => {
  try {
    // Attempt to retrieve a user by ID from the database
    const user = await UserInfo.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" }); // If the user is not found, respond with a 404 Not Found
    }
    res.json(user); // Respond with the found user in JSON format
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update user by ID
router.put("/users/:id", async (req, res) => {
  try {
    // Attempt to update a user by ID with the data from the request body
    const user = await UserInfo.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.update(req.body);
    res.json(user); // Respond with the updated user in JSON format
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update user by ID (for soft delete)
router.put("/users/:id/delete", async (req, res) => {
  try {
    const user = await UserInfo.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Set the isDeleted field to true
    await user.update({ isDeleted: true });

    res.json({ message: "User visually deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete user by ID
router.delete("/users/:id", async (req, res) => {
  try {
    // Attempt to delete a user by ID from the database
    const user = await UserInfo.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.destroy();
    res.json({ message: "User deleted successfully" }); // Respond with a success message in JSON format
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Similar routes for food_info CRUD operations

module.exports = router; // Export the router for use in other parts of the application
