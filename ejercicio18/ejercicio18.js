let tipoPase = prompt("Ingresa el tipo de pase (VIP, NORMAL o LIMITADO):");
let saldo = parseFloat(prompt("Ingresa el saldo disponible:"));

let puedePasar = tipoPase === "VIP" || saldo > 1000;

console.log("La persona puede pasar:", puedePasar);