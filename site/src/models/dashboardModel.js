var database = require("../database/config")

function buscarUltimasMedidasRam(idFuncionario) {
    instrucaoSql = `select uso from memoriaRam mr where fkFuncionario = ${idFuncionario};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    var testeBanco = database.executar(instrucaoSql);
    console.log(testeBanco)
}

function buscarUltimasMedidasCPU(idCPU) {
    instrucaoSql = `select uso from memoriaRam mr where fkFuncionario = ${idFuncionario};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidasRam,
    buscarMedidasEmTempoReal
}