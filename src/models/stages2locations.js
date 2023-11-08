const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");
const Stage = require("../models/stages");
const Location = require("../models/locations");

const Stage2locations = sequelize.define('Stage2locations',{
    stageID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'stages',
        key: 'ID'
      }
    },
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'locations',
        key: 'ID'
      }
    },
    distanceFromPriorLocationInMetres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    timeFromPriorLocationInMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'stages2locations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "stageID" },
          { name: "locationID" },
        ]
      },
      {
        name: "locationID",
        using: "BTREE",
        fields: [
          { name: "locationID" },
        ]
      },
    ]
  });


  // Stage.hasMany(Stage2locations, { foreignKey : 'stageStartLocationID'} );
  // Stage.hasMany(Stage2locations, { foreignKey : 'stageFinishLocationID'} );
  // Stage2locations.belongsTo(Stage);
  Stage2locations.belongsTo(Stage, { as: "stage", foreignKey: "stageID"});
  Stage.hasMany(Stage2locations, { as: "stages2locations", foreignKey: "stageID"});
  Stage2locations.belongsTo(Location, { as: "locations", foreignKey: "locationID"});
  Location.hasMany(Stage2locations, { as: "stages2locations", foreignKey: "locationID"});
  Stage.belongsToMany(Location, { through: Stage2locations });
  Location.belongsToMany(Stage, { through: Stage2locations });

  module.exports = Stage2locations;
