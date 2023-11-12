const express = require("express");
const medicamentosControllers = require("../controllers/medicamentosControllers");
const router = express.Router();

router.get("/", medicamentosControllers.verMedicamentos);
router.post("/", medicamentosControllers.crearMedicamento);

module.exports = router