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

const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");
// Establecer ando de linea
ctx.lineWidth = 10;

// Muro
ctx.strokeRect(75, 140, 150, 110);

// Puerta
ctx.fillRect(130, 190, 40, 60);

// Techo
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();


drawcuadrado();
drawpath();