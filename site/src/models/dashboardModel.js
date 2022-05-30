var database = require("../database/config")

function buscarUltimasMedidasRam(idFuncionario) {
    instrucaoSql = `select uso from memoriaRam where fkFuncionario = ${idFuncionario};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    var testeBanco = database.executar(instrucaoSql);
    console.log(testeBanco)
}

function buscarUltimasMedidasCPU(idCPU) {
    instrucaoSql = `select temperatura from cpu where fkFuncionario = ${idCPU};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    var testeBanco = database.executar(instrucaoSql);
    console.log(testeBanco)
}

function buscarMedidasEmTempoRealCPU(idCPU, limite_linhas) {
    instrucaoSql = `select temperatura from cpu where fkFuncionario = ${idCPU};
    order by idCPU desc limit ${limite_linhas}`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidasRam,
    buscarMedidasEmTempoRealCPU,
    buscarUltimasMedidasCPU
}