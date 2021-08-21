const ModeloTabela = require("../rotas/fornecedores/ModeloTabelaFornecedores");

ModeloTabela.sync()
  .then(() => console.log("Tabela Criada com Sucesso"))
  .catch(console.log("Erro ao criar tabla"));
