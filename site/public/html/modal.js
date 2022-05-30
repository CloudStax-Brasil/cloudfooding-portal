
function abrirModalCadastro() {
    let modal = document.getElementById('modal')
    .classList.add('active')
}

function fecharModalCadastro() {
    let modal = document.getElementById('modal')
    .classList.remove('active')
}

function abrirModalFuncionario(index){
    document.getElementById('modalFuncionario')
    .classList.add('active')
}

function fecharModalFuncionario(index){
    document.getElementById('modalFuncionario')
    .classList.remove('active');
}
