const prompt = require("prompt-sync")();

let Listadetarefas = [];

// Função para inserir tarefas
function InserirTarefas() {
    const tarefa = prompt("Olá, digite sua tarefa: ");
    if (tarefa.trim() !== "") {
        Listadetarefas.push(tarefa);
        console.log("Tarefa adicionada com sucesso!");
    } else {
        console.log("Tarefa inválida. Tente novamente.");
    }
}

// Função para exibir tarefas
function MostrarTarefas() {
    console.log("\n--- Lista de Tarefas ---");
    if (Listadetarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
    } else {
        Listadetarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    }
}
function AtualizarTarefa() {
    MostrarTarefas();
    const num = parseInt(prompt("Digite o número da tarefa que deseja atualizar: "));

    if (num > 0 && num <= Listadetarefas.length) {
        const novaTarefa = prompt("Digite a nova descrição da tarefa: ");
        if (novaTarefa.trim() !== "") {
            Listadetarefas[num - 1] = novaTarefa;
            console.log("Tarefa atualizada com sucesso!");
        } else {
            console.log("Tarefa inválida. Atualização cancelada.");
        }
    } else {
        console.log("Número inválido.");
    }
}
function RemoverTarefa() {
    MostrarTarefas();
    const num = parseInt(prompt("Digite o número da tarefa que deseja remover: "));

    if (num > 0 && num <= Listadetarefas.length) {
        const removida = Listadetarefas.splice(num - 1, 1);
        console.log(`Tarefa "${removida}" removida com sucesso!`);
    } else {
        console.log("Número inválido.");
    }
}


// Função principal com menu
function Menu() {
    let opcao;
    do {
        console.log("\n===== Menu =====");
        console.log("1. Inserir tarefa");
        console.log("2. Ver tarefas");
        console.log("3. Atualizar tarefa");
        console.log("4. Remover tarefa");
        console.log("5. Sair");
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                InserirTarefas();
                break;
            case "2":
                MostrarTarefas();
                break;
            case "3":
                AtualizarTarefa();
                break;
            case "4":
                RemoverTarefa();
                break;
            case "5":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== "5");
}

// Executa o programa
Menu();
