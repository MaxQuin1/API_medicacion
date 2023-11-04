const { json } = require("express");
const connection = require("../database");

function verViasAdministracion(request, response) {
    connection.query(`SELECT * FROM via_administracion`, (error, results) => {
      if (error) {
        response.status(500).json({ error: "Error al obtener via de administracion" });
      } else {
        response.status(200).json(results);
      }
    });
  }
  
  module.exports = {
    verViasAdministracion,
  };