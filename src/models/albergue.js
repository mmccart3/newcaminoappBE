const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const Albergue= sequelize.define('Albergue',{
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    albergueName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    numberOfBeds: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numberOfDorms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    albergueStreetAdress: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    onedPersonRateMin: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    onedPersonRateMax: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    twoPersonRateMin: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    twodPersonRateMax: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    rateNotes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kitchenFacilitiesAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    washingMachineAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dryingMachineAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    communalMealAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    openingPeriod: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(64),
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
    tel2CountryCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tel2PhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    albergueWebsiteURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    albergueBookingDotComURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    albergueAdditionalComments: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alberguepic1URL: {
      type: DataTypes.STRING(255),
      allowNull:true
    },
    alberguepic2URL: {
      type: DataTypes.STRING(255),
      allowNull:true
    },
    alberguepic3URL: {
      type: DataTypes.STRING(255),
      allowNull:true
    },
    alberguepic4URL: {
      type: DataTypes.STRING(255),
      allowNull:true
    },
    whatsAppNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gps_lat: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: true
    },
    gps_lng: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: true
    },
    check_in_opens: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    check_in_closes: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
    
  }, {
    tableName: 'albergue',
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
        name: "ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });

  module.exports = Albergue;
