// models/UserInfo.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const UserInfo = sequelize.define(
  "user_info",
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middle_initial: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // Add a new field for soft delete
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Initially, the user is not deleted
    },
  },
  {
    tableName: "user_info", // This is the custom table name
  }
);

module.exports = UserInfo;
