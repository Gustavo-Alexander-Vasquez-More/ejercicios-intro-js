let edad = parseInt(prompt("Ingresa tu edad:"));
let altura = parseInt(prompt("Ingresa tu altura en centímetros:"));

let puedeSubir = edad > 6 && altura >= 120;

console.log("Puede subir a la atracción:", puedeSubir);