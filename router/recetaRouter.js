const express = require("express");
const recetaControllers = require('../controllers/recetaControllers')
const router = express.Router();

router.get("/:id_usuario", recetaControllers.verRecetas);
router.post("/", recetaControllers.crearReceta);

module.exports = router
