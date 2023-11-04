const { json } = require("express");
const connection = require("../database");

function verUnidadMedida(request, response) {
    connection.query(`SELECT * FROM unidad_medida`, (error, results) => {
      if (error) {
        response.status(500).json({ error: "Error al obtener unidad de medida" });
      } else {
        response.status(200).json(results);
      }
    });
  }
  
  module.exports = {
    verUnidadMedida,
  };