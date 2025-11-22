const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {x: 50, y: 350, width: 30, height: 30, color: "red"};
let gravity = 1;
let velocityY = 0;
let onGround = false;

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    velocityY += gravity;
    player.y += velocityY;

    if(player.y + player.height > canvas.height){
        player.y = canvas.height - player.height;
        velocityY = 0;
        onGround = true;
    }

    drawPlayer();
    requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft") player.x -= 10;
    if(e.key === "ArrowRight") player.x += 10;
    if(e.key === "ArrowUp" && onGround){
        velocityY = -15;
        onGround = false;
    }
});

update();
