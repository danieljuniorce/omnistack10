const DevModel = require("../models/Dev");
const parseStringIsArray = require("../utils/parseStringIsArray");

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringIsArray(techs);

    const devs = await DevModel.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return res.json(devs);
  }
};
