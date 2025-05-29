const router = require("express").Router();

const { buscarProdutos, criarProduto , apagarProduto } = require("../controller/produtosController.js");


router.get("/", async (req, res) => {
  res.send(await buscarProdutos());
});

router.get("/:id", async (req, res) => {
  res.send( await buscarUmProduto(req.params.id))
});

router.post("/", async (req, res) => {
  res.send( await criarProduto(req.body));
});
router.put("/:id", (req, res) => {
  res.send(`Edita um produto id: ${req.params.id}`);
});
router.delete("/:id", async (req, res) => {
  res.send(await apagarProduto(req.params.id));
});



module.exports = router;