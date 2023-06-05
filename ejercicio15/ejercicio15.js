
let miEdad = parseInt(prompt("Ingresa tu edad:"));
let edadCompañero = parseInt(prompt("Ingresa la edad de tu compañero:"));
let edadesIguales = miEdad === edadCompañero;
let soyMayor = miEdad > edadCompañero;
let soyMenor = miEdad < edadCompañero;
console.log("Mi edad es igual a la de mi compañero:", edadesIguales);
console.log("Mi edad es mayor a la de mi compañero:", soyMayor);
console.log("Mi edad es menor a la de mi compañero:", soyMenor);