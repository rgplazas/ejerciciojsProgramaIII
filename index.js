let nombre = prompt("Ingrese su Nombre"); 
let dni = parseInt(prompt("Ingrese su DNI"));
let cargo = prompt("Ingrese su Cargo");
let edad = parseInt(prompt("Ingrese su Edad"));

document.write(`<h3>Hola, ${nombre} Te informamos que segun tu ${cargo} habilitamos tu DNI ${dni} para los beneficios tanto</h3>`);