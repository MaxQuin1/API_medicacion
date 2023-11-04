const express = require("express");
const medicamentosControllers = require("../controllers/medicamentosControllers");
const router = express.Router();

router.get("/", medicamentosControllers.verMedicamentos);

module.exports = router