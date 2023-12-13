import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Container } from "@mui/material";

function FoodForm() {
  const [formData, setFormData] = useState({
    food_name: "",
    date_time: "",
    food_rating: "",
    // Add other attributes as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add food");
      }

      // Clear form data on successful submission
      setFormData({
        food_name: "",
        date_time: "",
        food_rating: "",
        // Clear other attributes as needed
      });

      console.log("Food added successfully");
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h2" variant="h5">
          Food Form
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 20 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="food_name"
            label="Food Name"
            name="food_name"
            value={formData.food_name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="date_time"
            label="Date and Time"
            name="date_time"
            type="datetime-local"
            value={formData.date_time}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="food_rating"
            label="Food Rating"
            name="food_rating"
            type="number"
            value={formData.food_rating}
            onChange={handleChange}
          />
          {/* Add other TextField components for additional attributes */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default FoodForm;
