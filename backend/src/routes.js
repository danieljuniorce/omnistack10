const { Router } = require("express");

/**
 * Controllers
 */
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.get("/", (_, res) => res.send("hello world"));

/**
 * Lista de Todos os Devs
 */
routes.get("/devs", DevController.index);

/**
 * Cadastro de Novos Devs
 */
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
