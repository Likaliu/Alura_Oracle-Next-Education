let listaDeNomes = [];


//Função para adcionar o nome na lista
function adicionaAmigo() {
    let entrada = document.getElementById("amigo").value.trim();
    
    if (entrada === "" || /\d/.test(entrada)) {
        alert("Digite um nome válido (somente letras)!");
        return;
    }

    if (listaDeNomes.includes(entrada)) {
        alert("Nome já adicionado!");
        return;
    }

    listaDeNomes.push(entrada);
    atualizaLista();
    document.getElementById("amigo").value = "";
}

// Função para atualizar a lista de amigos exibida na tela
function atualizaLista() {
    let nomesInseridos = document.getElementById("listaAmigos");
    nomesInseridos.innerHTML = "";

    listaDeNomes.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        nomesInseridos.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sorteaAmigoSecreto() {
    if (listaDeNomes.length < 2) {
        alert("Adicione pelo menos dois nomes para realizar o sorteio!");
        return;
    }

    let embaralhado = [...listaDeNomes].sort(() => Math.random() - 0.5);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < embaralhado.length; i++) {
        let amigo1 = embaralhado[i];
        let amigo2 = i === embaralhado.length - 1 ? embaralhado[0] : embaralhado[i + 1];

        let item = document.createElement("li");
        item.textContent = `${amigo1} tirou ${amigo2}`;
        resultado.appendChild(item);
    }
}

