// const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize(    process.env.MYSQL_URI,
//     {logging: false, dialect: 'mysql'});

const sequelize = require("../db/connection");
const Stage = require("../models/stages");
const Location = require("../models/locations");
const Stage2location = require("../models/stages2locations")
const Location2privateAccomm = require("../models/location2privateAccomm");
const PrivateAccommDetail = require("../models/privateAccommDetail");
const Location2albergues = require("../models/location2albergues");
const Albergue = require("../models/albergue");
const Paragraph = require("../models/paragraphs");
const MapLocationCoords = require("../models/mapLocationCoords");
const StageDetails = require("../models/stageDetails");

exports.getStageData = async (req, res) => {
    try {
        if (!req.user) {
            res.status(400).send(`you are not logged in`);
        } else {
            const stageData = await Stage.findAll(
            {
                include:{
                    model: Stage2location,
                    as: 'stages2locations',
                    required: true
                },
                include:{
                    model: Location,
                    as: 'Locations',
                    required: true
                }
                }
            );
            res.status(200).send({stageData});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
};

exports.getStageData2 = async (req, res) => {
    try {
        if (!req.user) {
            res.status(400).send(`you are not logged in`);
        } else {
            const stageData2 = await sequelize.query(
            `SELECT stages.ID AS "StageID", stageName, fromloc.locationName AS "from", toloc.locationName AS "to",
            distanceFromPriorLocationInMetres, timeFromPriorLocationInMinutes, priorStage, altPriorStage, nextStage, altNextStage
            FROM stageDetails, stages, locations as fromloc, locations as toloc
            WHERE stageDetails.stageID = stages.ID
            AND fromLocationID = fromloc.ID
            AND toLocationId = toloc.ID
            ORDER BY stages.ID`
            );
            res.status(200).send({stageData2});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
};

exports.getStageDetails = async (req, res) => {
    try {
        if (!req.user) {
            res.status(400).send(`you are not logged in`);
        } else {
            const stageDetails = await sequelize.query(
            `SELECT
                    stages.ID, altNextStage, altPriorStage, nextStage, priorStage, stageDistanceInMetres, stageElevationChartURL,
                    stageFinishLocationID, stageMapURL, stageName, stageStartLocationID, stageTimeInMinutes, locationName, longitude, latitude
            FROM stages, locations
            WHERE stageStartLocationID = locations.ID`
            );
            res.status(200).send({stageDetails});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
};

exports.getLocationData = async (req, res) => {
    try {
        if (!req.user) {
            res.status(400).send(`you are not logged in`);
        } else {
            const locationPrivateData = await Location.findAll(
            {   
                include:{
                    model: PrivateAccommDetail,
                    as: 'fred',
                    required: false
                }
            }
            );
            const locationAlbergueData = await Location.findAll(
                {
                    include:{
                        model: Albergue,
                        as: 'fredalbergue',
                        required: false
                    }
                }
                );
                const locationParagraphs = await Location.findAll(
                    {
                        include:{
                            model: Paragraph,
                            as: 'paragraphs',
                            required: false
                        }
                    }
                    );

            const locationData =
            {
                locationPrivateData
                ,
                locationAlbergueData
                ,
                locationParagraphs    
            };
            res.status(200).send({locationData});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
};

exports.getMapCoordsData = async (req, res) => {
    try {
        if (!req.user) {
            res.status(400).send(`you are not logged in`);
        } else {
            const coordData = await MapLocationCoords.findAll(
            {
                }
            );
            res.status(200).send({coordData});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
};