let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    let lista = document.getElementById('listaAmigos');
    let resultado = document.getElementById('resultado');

    // Limpa mensagem de resultado quando adiciona
    resultado.innerHTML = '';

    if (nome === '') {
        resultado.innerHTML = ('Você precisa digitar um nome!');
        return;
    }

    if (amigos.includes(nome)) {
        resultado.innerHTML = ('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length < 2) {
        resultado.innerHTML = ('Adicione pelo menos 2 nomes para sortear!');
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li> O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}

