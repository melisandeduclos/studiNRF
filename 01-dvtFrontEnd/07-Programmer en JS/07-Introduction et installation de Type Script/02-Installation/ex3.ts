//3e exemple avec esnext dans tsconfig
//TypeScript est capable de détecter le type de la varibla, pas besoin de déclarer son type
let message3 = "Hello World"
console.log(message3);


//Il est préférable de les déclarer pour détecter les pb t mieux déboguer
function compute(a: number, b:number){
   return a * b;
}

console.log(compute(2, '4'))