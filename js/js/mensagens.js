const enviarBtn = document.getElementById('enviar');
const mural = document.getElementById('mural');
const mensagemInput = document.getElementById('mensagem');

function atualizarMural() {
    const mensagens = JSON.parse(localStorage.getItem('mensagens') || "[]");
    mural.innerHTML = '';
    mensagens.forEach(msg => {
        const div = document.createElement('div');
        div.textContent = msg;
        div.style.background = '#111';
        div.style.padding = '10px';
        div.style.margin = '5px 0';
        div.style.borderRadius = '5px';
        mural.appendChild(div);
    });
}

enviarBtn.addEventListener('click', () => {
    const texto = mensagemInput.value.trim();
    if(texto && !/[\[\]<>]/.test(texto)) { // simples filtro de caracteres especiais
        const mensagens = JSON.parse(localStorage.getItem('mensagens') || "[]");
        mensagens.push(texto);
        localStorage.setItem('mensagens', JSON.stringify(mensagens));
        mensagemInput.value = '';
        atualizarMural();
    } else {
        alert("Digite uma mensagem válida sem palavrões.");
    }
});

atualizarMural();
