const express = require("express");
const fechaControllers = require('../controllers/fechaControllers')
const router = express.Router();

router.post("/:id", fechaControllers.actualizarFecha);
router.delete("/:id", fechaControllers.eliminarFecha);

module.exports = router