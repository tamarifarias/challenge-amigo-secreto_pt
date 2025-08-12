// Array para armazenar os nomes
let pessoas = [];

function adicionarAmigo() {
    const nomePessoas = document.getElementById('amigo').value.trim();

    if (nomePessoas !== '') {
        pessoas.push(nomePessoas);
        console.log(pessoas);
        listaDeAmigos();
        limparCampo();
    } else {       
         alert('Por favor, insira um nome válido.');
    }
}

function limparCampo() {
    const listaPessoas = document.getElementById('amigo');
    listaPessoas.value = '';
    listaPessoas.focus();
}

function listaDeAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < pessoas.length; i++) {
        const item = document.createElement('li');
        item.textContent = pessoas[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (pessoas.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * pessoas.length);
    const amigoSorteado = pessoas[indiceSorteado];

    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpa resultados anteriores

    const itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultadoLista.appendChild(itemResultado);
}
