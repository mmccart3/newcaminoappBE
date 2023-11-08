const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");
const Location = require("../models/locations");
const Albergue = require("./albergue");

const Location2albergues= sequelize.define('Location2albergues',{
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'locations',
        key: 'ID'
      }
    },
    albergueID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'albergue',
        key: 'ID'
      }
    }
  }, {
    tableName: 'location2albergues',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locationID" },
          { name: "albergueID" },
        ]
      },
      {
        name: "albergueID",
        using: "BTREE",
        fields: [
          { name: "albergueID" },
        ]
      },
    ]
  });

  
  Location2albergues.belongsTo(Location, { as: "locations", foreignKey: "locationID"});
  Location.hasMany(Location2albergues, { as: "location2albergues", foreignKey: "locationID"});
  Location2albergues.belongsTo(Albergue, { as: "albergues", foreignKey: "albergueID"});
  Albergue.hasMany(Location2albergues, { as: "location2albergues", foreignKey: "albergueID"});
  Location.belongsToMany(Albergue, { as: "fredalbergue", through: Location2albergues});
  Albergue.belongsToMany(Location, { as: "georgealbergue", through: Location2albergues });

  module.exports = Location2albergues;
