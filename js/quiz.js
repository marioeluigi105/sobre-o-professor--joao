const quizData = [
    { pergunta: "Quantos anos tem João?", respostas: ["23", "25", "30", "20"], correta: "23" },
    { pergunta: "Qual é sua moto favorita?", respostas: ["KTM 390", "Honda CG", "Yamaha R1", "Africa Twin"], correta: "KTM 390" },
    { pergunta: "Qual carro é seu maior sonho?", respostas: ["Honda NSX", "Lamborghini", "Civic", "RX7"], correta: "Honda NSX" },
    { pergunta: "Quantas tatuagens ele possui?", respostas: ["5", "8", "10", "12"], correta: "8" },
    { pergunta: "Qual desses animes ele gosta?", respostas: ["Hunter x Hunter", "Naruto", "One Piece", "Dragon Ball"], correta: "Hunter x Hunter" },
    { pergunta: "Quem é seu personagem favorito de Fullmetal Alchemist?", respostas: ["Edward", "Alphonse", "Roy", "Winry"], correta: "Edward" },
    { pergunta: "Qual estilo musical ele ouve?", respostas: ["Apenas rap", "Eclético", "Rock", "Sertanejo"], correta: "Eclético" },
    { pergunta: "Qual moto ele considera aventureira?", respostas: ["Africa Twin", "KTM 390", "KTM 1390", "Honda NSX"], correta: "Africa Twin" },
    { pergunta: "Qual carro é turbo e japonês?", respostas: ["Silvia", "Corvette", "Chevette", "Lamborghini"], correta: "Silvia" },
    { pergunta: "Qual personagem é do anime Tokyo Ghoul?", respostas: ["Kaneki", "Gon", "Kaito", "Meruem"], correta: "Kaneki" }
];

const container = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultado = document.getElementById('resultado');

quizData.forEach((q, index) => {
    const div = document.createElement('div');
    div.classList.add('quiz-question');
    div.innerHTML = `<h3>${index+1}. ${q.pergunta}</h3>`;
    q.respostas.forEach(r => {
        const id = `q${index}-${r}`;
        div.innerHTML += `
            <label>
                <input type="radio" name="q${index}" value="${r}"> ${r}
            </label><br>
        `;
    });
    container.appendChild(div);
});

submitBtn.addEventListener('click', () => {
    let pontos = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name=q${index}]:checked`);
        if(selected && selected.value === q.correta) pontos++;
    });
    resultado.textContent = `Você acertou ${pontos} de ${quizData.length} perguntas!`;
});
