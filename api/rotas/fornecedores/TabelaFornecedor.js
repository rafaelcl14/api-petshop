const Modelo = require("./ModeloTabelaFornecedores");

module.exports = {
  listar() {
    return Modelo.findAll();
  },
  inserir(fornecedor) {
    return Modelo.create(fornecedor);
  },
  async pegarPorId(id) {
    const encontrado = await Modelo.findOne({
      where: {
        id,
      },
    });
    if (!encontrado) {
      throw new Error("Fornecedor não Encontrado");
    }
    console.log(encontrado);
    return encontrado;
  },

  atualizar(id, dadosParaAtualizar) {
    return Modelo.update(dadosParaAtualizar, {
      where: {
        id,
      },
    });
  },

  remover(id) {
    return Modelo.destroy({
      where: {
        id,
      },
    });
  },
};
