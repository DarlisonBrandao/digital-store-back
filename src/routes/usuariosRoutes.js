const router = require("express").Router();
const { executarSQL } = require("../services/index.js");

router.get("/", async (req, res) => {
  res.send( await executarSQL("SELECT * FROM produtos;"));
});

router.get("/:id", (req, res) => {
  res.send(`Busca todos os usuarios cm o id: ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Cria um usuario");
});
router.put("/:id", (req, res) => {
  res.send(`Edita um usuario id: ${req.params.id}`);
});
router.delete("/:id", (req, res) => {
  res.send(`Apaga um usuario id: ${req.params.id}`);
});


module.exports = router;