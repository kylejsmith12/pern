// models/FoodInfo.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const FoodInfo = sequelize.define("food_info", {
  food_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  food_rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Add other attributes as needed
});

module.exports = FoodInfo;
