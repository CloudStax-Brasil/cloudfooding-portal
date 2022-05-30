var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/listarCaixas", function (req, res) {
    usuarioController.listarCaixas(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/cadastrarCaixa", function (req, res) {
    usuarioController.cadastrarCaixa(req, res);
});

router.post("/atualizarCaixa", function (req, res){
    usuarioController.atualizarCaixa(req, res);
}) 

router.delete("/deletarCaixa/:idCaixa", function (req, res){
    usuarioController.deletarCaixa(req, res);
}) 

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;