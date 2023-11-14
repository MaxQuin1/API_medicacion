const express = require("express");
const fechaControllers = require('../controllers/fechaControllers')
const router = express.Router();

router.put("/:id", fechaControllers.actualizarFecha);
router.delete("/:id", fechaControllers.eliminarFecha);

module.exports = router