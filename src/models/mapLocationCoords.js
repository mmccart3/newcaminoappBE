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
    TLX1920: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TLY1920: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    BRX1920: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    BRY1920: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TLX1280: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TLY1280: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    BRX1280: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    BRY1280: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TLX1024: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TLY1024: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    BRX1024: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    BRY1024: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TLX640: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TLY640: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    BRX640: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    BRY640: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TLX360: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TLY360: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    BRX360: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    BRY360: {
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

module.exports = MapLocationCoords;