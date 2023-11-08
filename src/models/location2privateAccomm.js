const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");
const Location = require("../models/locations");
const PrivateAccommDetail = require("../models/privateAccommDetail");

const Location2privateAccomm= sequelize.define('Location2privateAccomm',{
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    privateAccommDetailID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'location2privateAccomm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locationID" },
          { name: "privateAccommDetailID" },
        ]
      },
      {
        name: "privateAccommDetailID",
        using: "BTREE",
        fields: [
          { name: "privateAccommDetailID" },
        ]
      },
    ]
  });

  Location2privateAccomm.belongsTo(Location, { as: "locations", foreignKey: "locationID"});
  Location.hasMany(Location2privateAccomm, { as: "location2privateAccomms", foreignKey: "locationID"});
  Location2privateAccomm.belongsTo(PrivateAccommDetail, { as: "privateAccomms", foreignKey: "privateAccommDetailID"});
  PrivateAccommDetail.hasMany(Location2privateAccomm, { as: "location2privateAccomms", foreignKey: "privateAccommDetailID"});
  Location.belongsToMany(PrivateAccommDetail, { as: "fred", through: Location2privateAccomm});
  PrivateAccommDetail.belongsToMany(Location, { as: "george", through: Location2privateAccomm });

  module.exports= Location2privateAccomm;
