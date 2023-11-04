const express = require("express");
const viasControllers = require("../controllers/viasControllers");
const router = express.Router();

router.get("/", viasControllers.verViasAdministracion);

module.exports = router