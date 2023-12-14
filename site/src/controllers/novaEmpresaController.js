var novaEmpresaModel = require("../models/novaEmpresaModel");

function cadastrar(req, res) {
    var cnpj = req.body.cnpjServer;
    var nome = req.body.nomeServer;

    novaEmpresaModel.cadastrar(nome,cnpj).then(
      function (resultado) {
        console.log("cheguei no then");
          res.json(resultado);
      }
  ).catch(
      function (erro) {
          console.log(erro);
          console.log(
              "\nHouve um erro ao realizar o cadastro! Erro: ",
              erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
      }
  );
  }

  module.exports = {
    cadastrar
}