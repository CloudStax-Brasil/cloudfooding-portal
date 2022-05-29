var database = require("../database/config")

function buscarUltimasMedidasRam(idFuncionario, limite_linhas) {
    instrucaoSql = `select uso from memoriaRam mr where fkFuncionario = ${idFuncionario}
                    order by id desc limit ${limite_linhas};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    var testeBanco = database.executar(instrucaoSql);
    console.log(testeBanco)
}

function buscarUltimasMedidasCPU(idCPU) {
    instrucaoSql = `select uso from memoriaRam mr where fkFuncionario = ${idFuncionario}
                    order by id desc limit ${limite_linhas};;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidasRam,
    buscarMedidasEmTempoReal
}