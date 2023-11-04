const express = require("express");
const recetaControllers = require('../controllers/recetaControllers')
const router = express.Router();

router.post("/", recetaControllers.crearReceta);

module.exports = router
