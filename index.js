const express = require("express");
const cors = require("cors");

const login = require('./router/loginRouter')
const agregarUsuario = require('./router/usuarioRouter')
const verMedicamentos = require('./router/medicamentosRouter')
const verViasAdministracion = require('./router/viasRouter')
const verUnidadMedida = require('./router/unidadMedidaRouter')


const app = express();
app.use(express.json());
app.use(cors());

app.use("/login", login);
app.use("/agregarUsuario", agregarUsuario);
app.use("/verMedicamentos", verMedicamentos);
app.use("/verViasAdministracion", verViasAdministracion);
app.use("/verUnidadMedida", verUnidadMedida);

app.listen(8082, () => {
  console.log("servidor iniciando...");
});
