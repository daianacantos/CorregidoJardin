/*Estructuras de Datos y Métodos
Jardín
• El jardín infantil necesita un programa para poder asignar cursos a las aulas
• Se cuentan con tres aulas: Azul, Verde y Amarilla
• Cada aula cuenta con una capacidad diferente (es decir, un número de
bancos)
• La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá
determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada*/

let sala: string[] = ["azul", "amarilla", "verde"];
let vacantes: number[] = [40, 35, 30];
let a: number = Math.min(...vacantes);
let b: number = Math.max(...vacantes);

let suma = 0;
let promedio = 0;
let i = 0;
for (let i = 0; i < vacantes.length; i++) {
  suma = suma + vacantes[i];
}
promedio = suma / vacantes.length;

console.log(a, b, suma, promedio);
let infantes: number = Number(prompt("ingrese numeros de infantes"));

if (infantes < b && infantes > promedio) {
  console.log(sala[0]);
} else if (infantes < a && infantes < promedio) {
  console.log(sala[1]);
} else if (infantes > a && infantes < promedio) {
  console.log(sala[2]);
} else {
  console.log(" no hay capacidad para ninguna sala");
}
