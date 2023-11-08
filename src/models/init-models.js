var DataTypes = require("sequelize").DataTypes;
var _stageDetails = require("./stageDetails");

function initModels(sequelize) {
  var stageDetails = _stageDetails(sequelize, DataTypes);

  stageDetails.belongsTo(locations, { as: "fromLocation", foreignKey: "fromLocationID"});
  locations.hasMany(stageDetails, { as: "stageDetails", foreignKey: "fromLocationID"});
  stageDetails.belongsTo(locations, { as: "toLocation", foreignKey: "toLocationID"});
  locations.hasMany(stageDetails, { as: "toLocation_stageDetails", foreignKey: "toLocationID"});
  stageDetails.belongsTo(stages, { as: "stage", foreignKey: "stageID"});
  stages.hasMany(stageDetails, { as: "stageDetails", foreignKey: "stageID"});

  return {
    stageDetails,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
