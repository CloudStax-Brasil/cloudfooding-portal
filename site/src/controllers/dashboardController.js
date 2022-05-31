var dashboardModel = require("../models/dashboardModel")

function buscarUltimasMedidasCpu(req, res) {

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

function buscarMedidasEmTempoRealCPU(req, res) {

    var idFuncionario = req.body.idFuncionario;

    dashboardModel.buscarMedidasEmTempoRealCPU(idFuncionario)
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

function buscarMedidasEmTempoRealRAM(req, res) {

    var idFuncionario = req.body.idFuncionario;

    dashboardModel.buscarMedidasEmTempoRealRAM(idFuncionario)
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
    var idFuncionario = req.body.idFuncionario;
    console.log(`Recuperando medidas em tempo real`);

    dashboardModel.buscarUltimasMedidasRam(idFuncionario).then(function (resultado) {
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
    buscarUltimasMedidasCpu,
    buscarUltimasMedidasRam,
    buscarMedidasEmTempoRealCPU,
    buscarMedidasEmTempoRealRAM
}