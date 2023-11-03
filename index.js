const express = require("express");
const cors = require("cors");

const login = require('./router/loginRouter')
const agregarUsuario = require('./router/usuarioRouter')

const app = express();
app.use(express.json());
app.use(cors());

app.use("/login", login);
app.use("/agregarUsuario", agregarUsuario);

app.listen(8082, () => {
  console.log("servidor iniciando...");
});
