const { Router } = require("express");
var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

router.get("/listarRam", function (req, res){
    dashboardController.buscarUltimasMedidasRam(req, res);
});

router.get("/ultimas/:idCPU", function (req, res){
    dashboardController.buscarUltimasMedidasCPU(req, res);
})

router.get("/tempo-real/:idCPU", function (req, res){
    dashboardController.buscarMedidasEmTempoRealCPU(req, res);
})

module.exports = router;