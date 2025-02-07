// app.js

let amigos = []; // Lista de amigos adicionados
let sorteados = []; // Lista de amigos já sorteados

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Campo de input
    const nomeAmigo = inputAmigo.value.trim(); // Valor do input, sem espaços extras

    // Verifica se o nome é válido
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome à lista e limpa o input
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    atualizarListaAmigos(); // Atualiza a lista na tela
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Elemento <ul> da lista
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada amigo à lista
    amigos.forEach(amigo => {
        const li = document.createElement('li'); // Cria um novo <li>
        li.textContent = amigo; // Define o texto do <li>
        listaAmigos.appendChild(li); // Adiciona o <li> à <ul>
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length < 3) {
        alert('O número mínimo de amigos é 3.');
        return;
    }

    // Verifica se todos os amigos já foram sorteados
    if (sorteados.length === amigos.length) {
        alert('Todos os amigos já foram sorteados.');
        return;
    }

    // Sorteia um amigo que ainda não foi sorteado
    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Sorteia um nome aleatório
    } while (sorteados.includes(amigoSorteado)); // Repete até encontrar um nome não sorteado

    // Adiciona o nome sorteado à lista de sorteados
    sorteados.push(amigoSorteado);

    // Exibe o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}

// Limpa a lista de sorteados quando um novo nome é digitado
document.getElementById('amigo').addEventListener('input', () => {
    if (sorteados.length > 0) {
        sorteados = []; // Reseta a lista de sorteados
        document.getElementById('resultado').innerHTML = ''; // Limpa o resultado na tela
    }
});
