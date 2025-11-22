const quizData = [
    {question: "Quantos anos João tem?", choices: ["20","23","25","30"], answer: "23"},
    {question: "Qual a moto favorita dele?", choices: ["Honda CBR","KTM 390","Yamaha R1","Suzuki GSX"], answer: "KTM 390"},
    {question: "Qual carro é seu maior sonho?", choices: ["Civic","Honda NSX","Corvette","Lamborghini"], answer: "Honda NSX"},
    {question: "Qual personagem de anime ele gosta?", choices: ["Gon","Naruto","Ichigo","Luffy"], answer: "Gon"},
    {question: "Quantas tatuagens João tem?", choices: ["5","6","8","10"], answer: "8"},
    {question: "Qual estilo musical ele não escuta?", choices: ["Rap","Sertanejo","Funk","Apenas Jazz"], answer: "Apenas Jazz"},
    {question: "Qual moto ele ama além da KTM?", choices: ["Africa Twin","CB500","YZF R6","Ducati Monster"], answer: "Africa Twin"},
    {question: "Qual carro clássico ele gosta?", choices: ["Chevette","Fiat Uno","VW Gol","Palio"], answer: "Chevette"},
    {question: "Qual personagem de anime é seu maior ícone sentimental?", choices: ["Edward Elric","Goku","Saitama","Naruto"], answer: "Edward Elric"},
    {question: "Qual tipo de carro ele gosta?", choices: ["Modificado e turbinado","Sedan normal","Hatch pequeno","Furgão"], answer: "Modificado e turbinado"}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    choicesEl.innerHTML = "";
    q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.classList.add("quiz-btn");
        btn.addEventListener("click", () => selectAnswer(choice));
        choicesEl.appendChild(btn);
    });
}

function selectAnswer(choice) {
    if(choice === quizData[currentQuestion].answer){
        score++;
    }
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.style.display = "none";
    choicesEl.style.display = "none";
    nextBtn.style.display = "none";
    resultEl.innerHTML = `<h3>Você acertou ${score} de ${quizData.length} perguntas!</h3>`;
}

nextBtn.addEventListener("click", () => loadQuestion());

loadQuestion();
