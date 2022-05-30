var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

router.get("/listarRam", function (req, res){
    dashboardController.buscarUltimasMedidasRam(req, res);
}); 
router.get("/listarCP  ", function (req, res){
    dashboardController.buscarUltimasMedidasCPU(req, res);
}); 