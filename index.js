const express = require("express");
const app = express();
const port = 8000;


const usuariosRoutes = require("./src/routes/usuariosRoutes");
const produtosRoutes = require("./src/routes/produtosRoutes");

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Ola Mundoooo!");

});

app.use("/usuarios", usuariosRoutes);
app.use("/produtos", produtosRoutes);

//Erro 404 
app.use((req, res) => {
  res.status(404).send("Rota não encontrada");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

