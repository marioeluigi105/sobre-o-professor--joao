const sendBtn = document.getElementById("sendBtn");
const msgInput = document.getElementById("msgInput");
const messagesContainer = document.getElementById("messagesContainer");

let messages = JSON.parse(localStorage.getItem("joaoMessages")) || [];

function renderMessages() {
    messagesContainer.innerHTML = "";
    messages.forEach(msg => {
        const div = document.createElement("div");
        div.classList.add("msg");
        div.textContent = msg;
        messagesContainer.appendChild(div);
    });
}

sendBtn.addEventListener("click", () => {
    let msg = msgInput.value.trim();
    if(msg && !msg.toLowerCase().includes("palavrão")){
        messages.push(msg);
        localStorage.setItem("joaoMessages", JSON.stringify(messages));
        msgInput.value = "";
        renderMessages();
    } else {
        alert("Mensagem inválida ou contém palavrão!");
    }
});

renderMessages();
