function drawcuadrado() {
    const canvas = document.getElementById("canvas_cuadrado");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}

function drawpath() {
    const canvas = document.getElementById("canvas_path");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(75, 50); 
        ctx.lineTo(50, 75); 
        ctx.lineTo(100, 75); 
        ctx.fill();

    }
}

drawcuadrado();
drawpath();