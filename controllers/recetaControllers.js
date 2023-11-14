const { json } = require("express");
const connection = require("../database");

function crearReceta(request, response) {
  const usuario = request.body.usuario;
  const medicamento = request.body.medicamento;
  const via = request.body.via;
  const unidad = request.body.unidad;
  const cantidad = request.body.cantidad;
  const dias = request.body.dias;
  const intervalo = request.body.intervalo;
  const dosis = request.body.dosis;

  connection.query(
    `CALL p_crearReceta(?,?,?,?,?,?,?,?)`,
    [usuario, medicamento, via, unidad, cantidad, dias, intervalo, dosis],
    (error, results) => {
      if (error) {
        console.error("Error al ejecutar el procedimiento almacenado:", error);
        response.status(500).json({ error: "Error al crear receta" });
      } else {
        response.status(200).json(results);
      }
    }
  );
}

function verRecetas(request, response) {
  const usuario = request.params.id_usuario;
  connection.query(
    `CALL p_verRecetaUsuario(?);`,
    [usuario],
    (error, results) => {
      if (error) {
        console.error("Error al obtener los datos:", error);
        response.status(500).json({ error: "Error" });
      } else {
        const flatResults = results[0];

        response.status(200).json(flatResults);
      }
    }
  );
}

function editarRecetas(request, response) {
  const id = request.params.id
  const dosis = request.body.dosis;
  
  connection.query(
    `UPDATE receta
     SET dosis = ?
     WHERE id_receta = ?`,
    [dosis, id],
    (error, results) => {
      if (error) {
        console.error("Error al actualizar los datos:", error);
        response.status(500).json({ error: "Error" });
      } else {
        console.log('Recetas actualizadas:', results);
        response.status(200).json(results);
      }
    }
  );  
}
  
module.exports = {
  crearReceta,
  verRecetas,
  editarRecetas,
};
