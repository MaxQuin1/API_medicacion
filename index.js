const express = require("express");
const cors = require("cors");

const login = require('./router/loginRouter')
const agregarUsuario = require('./router/usuarioRouter')
const verMedicamentos = require('./router/medicamentosRouter')
const crearMedicamentos = require('./router/medicamentosRouter')
const verViasAdministracion = require('./router/viasRouter')
const verUnidadMedida = require('./router/unidadMedidaRouter')
const verReceta = require('./router/recetaRouter')
const crearReceta = require('./router/recetaRouter')
const editarReceta = require('./router/recetaRouter')
const modificarFecha = require('./router/fechaRouter')
const eliminarFecha = require('./router/fechaRouter')
const crearComentario = require('./router/comentarioRouter')

const app = express();
app.use(express.json());
app.use(cors());

app.use("/login", login);
app.use("/agregarUsuario", agregarUsuario);
app.use("/verMedicamentos", verMedicamentos);
app.use("/crearMedicamentos", crearMedicamentos);
app.use("/verViasAdministracion", verViasAdministracion);
app.use("/verUnidadMedida", verUnidadMedida);
app.use("/verReceta", verReceta);
app.use("/crearReceta", crearReceta);
app.use("/editarReceta", editarReceta);
app.use("/modificarFecha", modificarFecha);
app.use("/eliminarFecha", eliminarFecha);
app.use("/crearComentario", crearComentario);

app.listen(8082, () => {
  console.log("servidor iniciando...");
});
