const { json } = require("express");
const connection = require("../database");

function crearComentario(request, response) {
  const receta = request.params.id;
  const comentario = request.body.comentario;

  connection.query(
    `UPDATE receta
       SET comentario = ?
       WHERE id_receta = ?;`,
    [comentario, receta],
    (error, results) => {
      if (error) {
        console.error("Error al insertar el comentario:", error);
        response.status(500).json({ error: "Error al crear el comentario" });
      } else {
        response.status(200).json(results);
      }
    }
  );
}

module.exports = {
  crearComentario,
};
