var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarCaixas(req, res) {
    var fkGerente = req.body.fkGerente;

    usuarioModel.listarCaixas(fkGerente)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarCaixa(req, res) {
    var idCaixa = req.params.idCaixa;

    usuarioModel.deletarCaixa(idCaixa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizarCaixa(req, res) {
    var idFuncionario = req.body.idFuncionario;
    var nomeFuncionario = req.body.nomeFuncionario;
    var emailFuncionario = req.body.emailFuncionario;
    var senhaFuncionario = req.body.senhaFuncionario;

    usuarioModel.atualizarCaixa(idFuncionario, nomeFuncionario, emailFuncionario, senhaFuncionario)
        .then(function (resultado) {
                res.status(200).json(resultado);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha est?? indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inv??lido(s)");
                    } else {
                        res.status(403).send("Mais de um usu??rio com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    

    if (nome == undefined) {
        res.status(400).send("Seu nome est?? undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha est?? undefined!");
    } else {
        
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarCaixa(req, res) {
    var nomeCaixa = req.body.nomeCaixa;
    var emailCaixa = req.body.emailCaixa;
    var senhaCaixa = req.body.senhaCaixa;
    var fkGerente = req.body.fkGerente;
    

    if (nomeCaixa == undefined) {
        res.status(400).send("Seu nome est?? undefined!");
    } else if (emailCaixa == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senhaCaixa == undefined) {
        res.status(400).send("Sua senha est?? undefined!");
    } else {
        
        usuarioModel.cadastrarCaixa(nomeCaixa, emailCaixa, senhaCaixa, fkGerente)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    entrar,
    cadastrar,
    cadastrarCaixa,
    listar,
    listarCaixas,
    atualizarCaixa,
    testar,
    deletarCaixa
}