const { DataTypes } = require("sequelize");
const sequelize = require("../instances/mysql");

const Task = sequelize.define(
  "Task",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    taskName: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 4,
      },
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 4,
      },
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    finishDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    tableName: "tasks",
    timestamps: false,
  }
);

module.exports = Task;
