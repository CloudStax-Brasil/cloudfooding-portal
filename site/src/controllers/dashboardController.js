var dashboardModel = require("../models/dashboardModel")

function buscarUltimasMedidasRam(req, res) {

    const limite_linhas = 7;

    var idFuncionario = req.body.idFuncionario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    dashboardModel.buscarUltimasMedidasRam(idFuncionario, limite_linhas)
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
function buscarMedidasEmTempoReal(req, res) {

    var idFuncionario = req.body.idFuncionario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idFuncionario).then(function (resultado) {
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
    buscarUltimasMedidasRam,
    buscarMedidasEmTempoReal
}