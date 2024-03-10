const canvasElmt = document.getElementById('example3');
const ctx = canvasElmt.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 150);

ctx.stroke();
ctx.closePath();

ctx.beginPath();
//desin d'un autre point non connecter au précédent
ctx.moveTo(100, 50);
ctx.lineTo(100, 150);
ctx.lineTo(150, 100);
ctx.closePath();

//dessiner la ligne
ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(0,153,25)";
ctx.stroke();
var r_a = 0.5; 
ctx.fillStyle = "rgba(153, 255, 153, " + r_a + ")";
ctx.fill();