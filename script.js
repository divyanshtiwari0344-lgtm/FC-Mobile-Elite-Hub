function generateCard() {
    const name = document.getElementById("playerName").value;
    const ovr = document.getElementById("playerOVR").value;
    const position = document.getElementById("playerPosition").value;

    if (!name || !ovr || !position) {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("playerCardResult").innerHTML = `
        <div class="player-card">
            <div class="card-ovr">${ovr}</div>
            <div class="card-position">${position}</div>
            <div class="card-player-name">${name}</div>
        </div>
    `;
}