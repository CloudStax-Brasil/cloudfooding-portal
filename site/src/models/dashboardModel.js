var database = require("../database/config")

function buscarUltimasMedidasRam(idFuncionario) {
    instrucaoSql = `select TOP 5 uso from memoriaRam where fkFuncionario = ${idFuncionario} order by memoriaRam.idmemoriaRam DESC;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    var testeBanco = database.executar(instrucaoSql);
    console.log(testeBanco)
    return testeBanco;
}

function buscarUltimasMedidasCPU(idFuncionario) {
    instrucaoSql = `select TOP 5 uso from cpu where fkFuncionario = ${idFuncionario} order by cpu.idCPU DESC;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    var testeBanco = database.executar(instrucaoSql);
    console.log(testeBanco)
    return testeBanco;
}

function buscarMedidasEmTempoRealCPU(idFuncionario) {
    instrucaoSql = `select TOP 1 uso from cpu where fkFuncionario = ${idFuncionario} order by cpu.idCPU DESC;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealRAM(idFuncionario) {
    instrucaoSql = `select TOP 1 uso from memoriaRam where fkFuncionario = ${idFuncionario} order by memoriaRam.idmemoriaRam DESC;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasRam,
    buscarMedidasEmTempoRealRAM,
    buscarMedidasEmTempoRealCPU,
    buscarUltimasMedidasCPU,
}