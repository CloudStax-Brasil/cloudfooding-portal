
function abrirModal() {
    let modal = document.getElementById('modal')
    .classList.add('active')
}

function fecharModal() {
    let modal = document.getElementById('modal')
    .classList.remove('active')
}

function abrirModalGrafico(idFuncionario, nomeFuncionario) {
    sessionStorage.ID_FUNCIONARIO = idFuncionario;
    document.getElementById('desempenho-caixa').innerHTML = `Desempenho Caixa - ${nomeFuncionario}`
    let modal = document.getElementById('modalFuncionario')
    .classList.add('active')
}

function fecharModalGrafico() {
    sessionStorage.ID_FUNCIONARIO = null;
    let modal = document.getElementById('modalFuncionario')
    .classList.remove('active')
    location.reload()
}

function openEditModal(idFuncionario, nomeFuncionario, emailFuncionario, senhaFuncionario) {
    sessionStorage.ID_FUNCIONARIO = idFuncionario;
    sessionStorage.NOME_FUNCIONARIO = nomeFuncionario;
    sessionStorage.EMAIL_FUNCIONARIO = emailFuncionario;
    sessionStorage.SENHA_FUNCIONARIO = senhaFuncionario;
    document.getElementById('nomeFuncionario').value = nomeFuncionario;
    document.getElementById('emailFuncionario').value = emailFuncionario;
    document.getElementById('senhaFuncionario').value = senhaFuncionario;
    let editModal = document.getElementById('editModal')
    .classList.add('active')
}

function fecharModalEdit() {
    sessionStorage.ID_FUNCIONARIO = null;
    sessionStorage.NOME_FUNCIONARIO = null;
    sessionStorage.EMAIL_FUNCIONARIO = null;
    sessionStorage.SENHA_FUNCIONARIO = null;
    let editModal = document.getElementById('editModal')
    .classList.remove('active')
}