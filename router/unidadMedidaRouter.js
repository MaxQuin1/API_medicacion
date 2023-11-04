const express = require("express");
const unidadControllers = require("../controllers/unidadMedidaControllers");
const router = express.Router();

router.get("/", unidadControllers.verUnidadMedida);

module.exports = router