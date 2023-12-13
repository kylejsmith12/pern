import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Container } from "@mui/material";
const apiEndpoint = "http://localhost:3000/api/users"; // Update with your server's URL

function UserForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_initial: "",
    last_name: "",
    height: "",
    weight: "",
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
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      // Clear form data on successful submission
      setFormData({
        first_name: "",
        middle_initial: "",
        last_name: "",
        height: "",
        weight: "",
      });

      console.log("User added successfully");
    } catch (error) {
      console.error("Error adding user:", error);
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
          User Form
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 20 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="middle_initial"
            label="Middle Initial"
            name="middle_initial"
            value={formData.middle_initial}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="height"
            label="Height"
            name="height"
            type="number"
            value={formData.height}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="weight"
            label="Weight"
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleChange}
          />
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

export default UserForm;
