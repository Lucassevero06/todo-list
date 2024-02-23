const button = document.querySelector(".add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = [];

function adicionarTask() {

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    });

    input.value = "";

    mostrarTarefas();

};

function mostrarTarefas() {

    let novaLi = '';

    minhaListaDeItens.forEach((item, posicao) => {

        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img src="img/checked.png" alt="concluir-tarefa" onclick="concluirTask(${posicao})"/>
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="excluir-tarefa" onclick="deletarTask(${posicao})"/>
        </li>
        `;

    });

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem('Lista', JSON.stringify(minhaListaDeItens));

};

function concluirTask(posicao){

    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;

    mostrarTarefas();

};

function deletarTask(posicao){

    minhaListaDeItens.splice(posicao, 1);

    mostrarTarefas();

};

function recarregarTarefas(){

    const tarefasDoLocalStorage = localStorage.getItem('Lista');

    if(tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage);
    }

    mostrarTarefas();

};

recarregarTarefas();

button.addEventListener('click', adicionarTask);