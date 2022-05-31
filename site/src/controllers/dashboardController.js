var dashboardModel = require("../models/dashboardModel")

function buscarUltimasMedidasCPU(req, res) {

    var idFuncionario = req.body.idFuncionario;

    dashboardModel.buscarUltimasMedidasCPU(idFuncionario)
    .then(function (resultado) {
        console.log("resultado: ", resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas de cpu.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasRam(req, res) {
    var idCPU = req.body.idCPU;
    console.log(`Recuperando medidas em tempo real`);

    dashboardModel.buscarUltimasMedidasRam(idCPU).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasRam
}