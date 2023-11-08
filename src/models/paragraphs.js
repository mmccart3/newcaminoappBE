const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");
const Location = require("../models/locations");

const Paragraph = sequelize.define('Paragraph',{
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    paragraphType: {
      type: DataTypes.ENUM('PLAIN','DIRECTIONS','HISTORY'),
      allowNull: true
    },
    paragraphText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tel1CountryCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tel1PhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paragraphWebsiteURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'ID'
      }
    }
  }, {
    tableName: 'paragraphs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
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

  Paragraph.belongsTo(Location, { as: "location", foreignKey: "locationID"});
  Location.hasMany(Paragraph, { as: "paragraphs", foreignKey: "locationID"});

  module.exports = Paragraph;
