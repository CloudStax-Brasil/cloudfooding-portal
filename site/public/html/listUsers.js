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
                console.log(json);
                console.log(JSON.stringify(json));

                console.log("email: ", emailVar)
                console.log("nome: ", nomeVar)
                console.log("senha: ", senhaVar)
                console.log("id: ", idvar)

                emailVar = json.emailFuncionario;
                nomevar = json.nomeFuncionario;
                senhaVar = json.senhaFuncionario;
                idVar = json.idFuncionario;

                saveClient()
            });

        } else {
            throw ("Houve um erro ao tentar listar os caixas!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
return false;
}

const saveClient = () => {
    if (isValidFields()) {
        const client = {
            nome: nomeVar,
            email: emailVar,
            senha: senhaVar,
        }
        const index = idVar
        if (index == 'new') {
            createClient(client)
            updateTable()
        } else {
            updateClient(index, client)
            updateTable()
        }
    }
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.senha}</td>
        <td>
            <button type="button" class="button blue" id="funcionario">Funcionario</button>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}