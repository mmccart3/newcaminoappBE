const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const Stage= sequelize.define('Stage',{
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stageName: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    stageDistanceInMetres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stageTimeInMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stageStartLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'ID'
      }
    },
    stageFinishLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'ID'
      }
    },
    stageMapURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stageElevationChartURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'stages',
    timestamps: false
  });

  module.exports = Stage;