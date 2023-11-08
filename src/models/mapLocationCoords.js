const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");
const Location = require("./locations");
const Stages = require("./stages");

const MapLocationCoords= sequelize.define('MapLocationCoords',{
    ID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
        },
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
    topLeftX: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    topLeftY: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    bottomRightX: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    bottomRightY: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    

},
{
        tableName: 'mapLocationCoords',
        timestamps: false,
    indexes: [
        {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
        { name: "stageID" },
        ]
        },

    ]
});


MapLocationCoords.belongsTo(Location, { as: "locations", foreignKey: "locationID"});
Location.hasMany(MapLocationCoords, { as: "MapLocationCoords", foreignKey: "locationID"});
MapLocationCoords.belongsTo(Stages, { as: "stages", foreignKey: "stageID"});
Stages.hasMany(MapLocationCoords, { as: "MapLocationCoords", foreignKey: "stageID"});
// Location.belongsToMany(Stages, { as: "fredlocations", through: MapLocationCoords});
// Stages.belongsToMany(Location, { as: "georgestages", through: MapLocationCoords });

module.exports = MapLocationCoords;