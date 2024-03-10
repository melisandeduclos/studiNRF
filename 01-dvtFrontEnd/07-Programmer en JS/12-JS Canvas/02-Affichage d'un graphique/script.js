const canvasElement = document.getElementById('graph');
const ctx = canvasElement.getContext('2d');

//fonction pour affihcer les coordonnées verticalement
const fillTextVertically = (text, x, y) => {
   const lineHeight = 10;
   y = y - lineHeight * text.length / 2;


   ctx.textAlign = "center";
   for (var i = 0; i < text.length; i += 1) {
       ctx.fillText(text[i], x, y + i * lineHeight);
   }
}

//Créer les axes
//Axe x
const creatAxeX = (marks, scale, unit, label) => {
      const distance = (ctx.canvas.width - 100) / marks;
   //50 * 2 = 100  : les 2 marges du graph

   ctx.beginPath();
   ctx.moveTo(50, ctx.canvas.height - 50);
   ctx.lineTo(ctx.canvas.width - 50 , ctx.canvas.height - 50);
   ctx.stroke();

   if(label){
      ctx.textAlign = "center";
      ctx.fillText(label, ctx.canvas.width/2, ctx.canvas.height - 10);
   }

   for (var i = 0; i <= marks; i +=1 ) {
      ctx.beginPath();
      ctx.moveTo(50 + distance * i, ctx.canvas.height - 50)
      ctx.lineTo(50 + distance * i, ctx.canvas.height - 45);
      ctx.stroke ();

      ctx.textAlign = "center"
      if (unit) {
         ctx.fillText (i * scale + unit, 50 + distance * i, ctx.canvas.height - 32);
      } else {ctx.fillText (i * scale, 50 + distance * i, ctx.canvas.height - 32);}
   }
}

//Axe y
const creatAxeY = (marks, scale, unit, label) => {
      const distance = (ctx.canvas.height - 100) / marks;
   //50 * 2 = 100  : les 2 marges du graph

   ctx.beginPath();
   ctx.moveTo(50, 50);
   ctx.lineTo(50 , ctx.canvas.height - 50);
   ctx.stroke();

   if(label){
      ctx.textAlign = "center";
      fillTextVertically(label, 10, ctx.canvas.height /2)
   }

   for (var i = 0; i <= marks; i +=1 ) {
      ctx.beginPath();
      ctx.moveTo(50, ctx.canvas.height - 50 - i * distance);
      ctx.lineTo(45, ctx.canvas.height - 50 - i * distance);
      ctx.stroke ();

      ctx.textAlign = "center"
      if (unit) {
         ctx.fillText (i * scale + unit, 35, ctx.canvas.height - 50 - i * distance);
      } else {ctx.fillText (i * scale, 35 , ctx.canvas.height - 50 - i * distance);}
   }
}

const generatePoints = (size, x_min, x_max, y_min, y_max, color) =>{
   const points = [];
   for (var i = 0; i < size; i+= 1){
      points.push({
         x: Math.random() * (x_max - x_min) + x_min,
         y: Math.random() * (y_max - y_min) + y_min,
         color: color
      })
   }
   return points
}

const placePoints = (points, marks_x, scale_x, marks_y, scale_y) => {
   const transform_x = marks_x * scale_x / (ctx.canvas.width -100) //Mise à l'échelle des points par rapport au canvas
   const transform_y = marks_y * scale_y / (ctx.canvas.height -100) //Mise à l'échelle des points par rapport au canvas

   points.forEach(point => {
      const x = 50 + point.x / transform_x;
      const y = ctx.canvas.height - 50 -point.y /transform_y;

      ctx.beginPath();
      ctx.arc(x,y,4, 0, 2 * Math.PI);
      ctx.fillStyle = point.color;
      ctx.fill();
   })
}
creatAxeX(10,100, undefined, "Income");
creatAxeY(10,10, "%", "Happiness");

points = generatePoints (50, 0, 1000, 50, 100, "rgb(0,153,25)")
console.log(points);
placePoints (points, 10, 100, 10, 10);