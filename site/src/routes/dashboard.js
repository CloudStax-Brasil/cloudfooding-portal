const { Router } = require("express");
var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

router.post("/buscarUltimasMedidasCPU", function (req, res) {
    dashboardController.buscarUltimasMedidasCpu(req, res);
});

router.post("/buscarUltimasMedidasRam", function (req, res) {
    dashboardController.buscarUltimasMedidasRam(req, res);
})

router.post("/buscarMedidasCPUTempoReal", function (req, res) {
    dashboardController.buscarMedidasEmTempoRealCPU(req, res);
});

router.post("/buscarMedidasRamTempoReal", function (req, res) {
    dashboardController.buscarMedidasEmTempoRealRAM(req, res);
})

module.exports = router;