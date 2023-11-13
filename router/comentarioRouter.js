const express = require("express");
const comentarioControllers = require('../controllers/comentarioControllers')
const router = express.Router();

router.post("/:id", comentarioControllers.crearComentario);

module.exports = router