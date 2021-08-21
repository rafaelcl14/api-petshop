const router = require("express").Router();
const TabelaFornecedor = require("./TabelaFornecedor");
const Fornecedor = require("./Fornecedor");

router.get("/", async (req, res) => {
  const resultados = await TabelaFornecedor.listar();
  res.send(JSON.stringify(resultados));
});

router.post("/", async (req, res) => {
  try {
    const dadosRecebidos = req.body;
    const fornecedor = new Fornecedor(dadosRecebidos);
    await fornecedor.criar();
    res.send(JSON.stringify(fornecedor));
  } catch (error) {
    res.send(
      JSON.stringify({
        mensagem: error.mensage,
      })
    );
  }
});

router.get("/:idFornecedor", async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const fornecedor = new Fornecedor({ id: id });
    await fornecedor.carregar();
    res.send(JSON.stringify(fornecedor));
  } catch (error) {
    res.send(
      JSON.stringify({
        message: error.message,
      })
    );
  }
});

router.put("/:idFornecedor", async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const dadosRecebidos = req.body;
    const dados = Object.assign({}, dadosRecebidos, { id: id });
    const fornecedor = new Fornecedor(dados);
    await fornecedor.atualizar();
    res.end();
  } catch (error) {
    res.send(
      JSON.stringify({
        message: error.message,
      })
    );
  }
});

router.delete("/:idFornecedor", async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const fornecedor = new Fornecedor({ id });
    await fornecedor.carregar();
    await fornecedor.remover();
    res.end();
  } catch (error) {
    res.send(
      JSON.stringify({
        message: error.message,
      })
    );
  }
});

module.exports = router;
