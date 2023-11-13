const { json } = require("express");
const connection = require("../database");

function actualizarFecha(request, response) {
  const receta = request.params.id;

  connection.query(
    `UPDATE receta
       SET fecha = NOW()
       WHERE id_receta = ?;
      `,
    [receta],
    (error, results) => {
      if (error) {
        console.error("Error al actualizar la fecha:", error);
        response.status(500).json({ error: "Error al actualizar la fecha" });
      } else {
        response.status(200).json(results);
      }
    }
  );
}

const eliminarFecha = (req,res) => {
  const receta = req.params.id;

  connection.query('DELETE FROM receta WHERE id_receta = ?',[receta],(error) => {
      console.error("Error la receta el producto".error);
      if (error){
          console.error("Error al eliminar la receta",error);
          res.status(500).json({error :"Ocurrio un error al eliminar la receta"});
      }else{
          res.json({message:"La receta fue elimanada correctamente"});
      }
  });
}

module.exports = {
  actualizarFecha,
  eliminarFecha,
};
