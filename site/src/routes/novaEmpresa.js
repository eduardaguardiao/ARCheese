var express = require("express");
var router = express.Router();

var novaEmpresaController = require("../controllers/novaEmpresaController");

router.post("/cadastrar", function (req, res) {
    novaEmpresaController.cadastrar(req, res);
  });
  
  module.exports = router;