const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const StageDetails= sequelize.define('StageDetails',{
    stageID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'stages',
        key: 'ID'
      }
    },
    fromLocationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'locations',
        key: 'ID'
      }
    },
    toLocationID: {
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
    sequelize,
    tableName: 'stageDetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "stageID" },
          { name: "fromLocationID" },
          { name: "toLocationID" },
        ]
      },
      {
        name: "fromLocationID",
        using: "BTREE",
        fields: [
          { name: "fromLocationID" },
        ]
      },
      {
        name: "toLocationID",
        using: "BTREE",
        fields: [
          { name: "toLocationID" },
        ]
      },
    ]
  });

module.exports = StageDetails;
