var dashboardModel = require("../models/dashboardModel")

function buscarUltimasMedidasCPU(req, res) {

    const limite_linhas = 7;

    var idMaquina = req.body.idMaquina;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    dashboardModel.buscarUltimasMedidasRam(idMaquina, limite_linhas)
    .then(function (resultado) {
        console.log("resultado: ", resultado)
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

function buscarMedidasEmTempoRealCPU(req, res) {

    var idCPU = req.body.idCPU;

    console.log(`Recuperando medidas em tempo real`);

    dashboardModel.buscarMedidasEmTempoRealCPU(idCPU).then(function (resultado) {
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
    buscarMedidasEmTempoRealCPU
}