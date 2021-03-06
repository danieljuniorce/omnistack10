const DevModel = require("../models/Dev");
const axios = require("axios");
const parseStringIsArray = require("../utils/parseStringIsArray");
const { findConnections, sendMessage } = require("../websocket");

module.exports = {
  async index(_, res) {
    const devs = await DevModel.find();

    return res.json(devs);
  },
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await DevModel.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name = login, avatar_url, bio } = response.data;

      const techsArray = parseStringIsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await DevModel.create({
        name,
        github_username,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });

      //filtrar
      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray
      );

      sendMessage(sendSocketMessageTo, "new-dev", dev);
    }

    return res.json(dev);
  }
};
