var dashModel = require("../models/dashboardModel")

function buscarUltimasMedidasRam(req, res) {

    const limite_linhas = 7;

    var idFuncionario = req.params.idFuncionario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    dashModel.buscarUltimasMedidasRam(idFuncionario, limite_linhas).then(function (resultado) {
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
function buscarUltimasMedidasCPU(req, res) {

    var idFuncionario = req.params.idFuncionario;

    console.log(`Recuperando medidas em tempo real`);

    dashModel.buscarUltimasMedidasCPU(idFuncionario).then(function (resultado) {
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
    buscarUltimasMedidasCPU,
}