var emailVar;
var nomeVar;
var idVar;
var senhaVar;
var fkVar = sessionStorage.ID_USUARIO;

function listarCaixas(){
    fetch("/usuarios/listarCaixas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkGerente: fkVar
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log("Funcionários listados com sucesso");
            resposta.json().then(json => {
                console.log("json: ", json);
                console.log("json.stringify: ", JSON.stringify(json));

                emailVar = json.emailFuncionario;
                nomevar = json.nomeFuncionario;
                senhaVar = json.senhaFuncionario;
                idVar = json.idFuncionario;

                for(i = 0; i< json.length; i++){
                    let client = {
                        nome: json[i].nomeFuncionario,
                        email: json[i].emailFuncionarioailVar,
                        senha: json[i].senhaFuncionario,
                    }
                    let index = json[i].idFuncionario
                    document.getElementById(`table0`).innerHTML += `
                    <tr>
                        <th style="color: white;">Nome</th>
                        <th style="color: white;">E-mail</th>
                        <th style="color: white;">Senha</th>
                        <th style="color: white;">Ação</th>
                    </tr>
                `
                    console.log(`funcionario for: ${json[i]}`)
                }
            });

        } else {
            throw ("Houve um erro ao tentar listar os caixas!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
return false;
}