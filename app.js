let number = Math.floor(Math.random() * 11);
let attempts = 0;
createBubbles("normal");
function guess() {
    let value = parseInt(document.getElementById("txtNumber").value);
    let message = document.getElementById("lblMessage");

    attempts++;

    if (value > number) {
        message.innerHTML = `<p>Number is greater!...</p>`;

    } else if (value < number) {
        message.innerHTML = `<p>Number is too low!...</p>`;

    } else {
        message.innerHTML = `<p>🎉 Congratulations! You guessed the number!</p>`;
        createBubbles("win");
        resetGame();
        return;
    }

    if (attempts >= 3) {
        message.innerHTML = `<p>❌ No more attempts! The number was ${number}</p>`;
        createBubbles("wrong");
        resetGame();
        return;
    }
}

function resetGame() {
    setTimeout(() => {
        attempts = 0;
        number = Math.floor(Math.random() * 11);
        document.getElementById("txtNumber").value = "";
        document.getElementById("lblMessage").innerHTML = `<p>🔄 Game reset! Try again.</p>`;
    }, 1500); 
}
function createBubbles(type) {
    const bubbleArea = document.getElementById("bubbleArea");
    bubbleArea.innerHTML = ""; // clear previous bubbles
    
    let emojis = [];

    if (type === "normal") emojis = ["⚪", "🔵", "🟣", "🔮", "💠"];
    if (type === "win") emojis = ["🎉", "😀", "🎈", "🥳", "🏆"];
    if (type === "wrong") emojis = ["😢", "💀", "👎", "😭", "❌"];

    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = (4 + Math.random() * 4) + "s";
        bubble.style.fontSize = (20 + Math.random() * 20) + "px";
        bubbleArea.appendChild(bubble);
    }

    setTimeout(() => {
        if (type !== "normal") createBubbles("normal");
    }, 3000);
}
