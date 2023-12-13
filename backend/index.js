require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import the cors middleware
const sequelize = require("./db");
const UserInfo = require("./models/UserInfo");
const FoodInfo = require("./models/FoodInfo");
const apiRoutes = require("./routes/api");

const app = express();

// Synchronize Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
});

// Middleware
app.use(cors()); // Use cors middleware
app.use(express.json());
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
