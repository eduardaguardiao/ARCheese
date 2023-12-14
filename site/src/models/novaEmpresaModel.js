var database = require("../database/config");
function cadastrar(nome, cnpj) {
    var instrucao = `insert into empresa (nome, cnpj) values ('${nome}', '${cnpj}')`;
  
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  module.exports = {cadastrar}