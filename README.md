Desarrollar una pequeña aplicación web en JavaScript que solicite al usuario ingresar sus datos básicos utilizando el método prompt(). Los datos que deben ser ingresados son:

  - Nombre y apellido
  - DNI
  - Edad
  -   Cargo

Una vez obtenidos los datos, se deben realizar las siguientes acciones:
1. Mostrar un mensaje personalizado en la página HTML usando document.write(). El mensaje debe seguir el siguiente formato:
  Hola, [nombre y apellido del usuario]
  Te informamos que según tu cargo de [cargo], habilitamos tu DNI número [DNI] para el beneficio tanto.
2. Validar la edad del usuario en la consola del navegador, verificando si es mayor de edad (18 años o más). Dependiendo de la edad ingresada, se debe mostrar uno de los siguientes mensajes en la consola:
  - Si el usuario tiene 18 años o más: "Acceso permitido. Eres mayor de edad."
  - Si el usuario tiene menos de 18 años: "Acceso denegado. Eres menor de edad."

Requisitos técnicos:
  - Debes utilizar las siguientes funcionalidades de JavaScript:
    - Variables para almacenar los datos del usuario.
    - El método prompt() para solicitar datos al usuario.
    - El método document.write() para mostrar el mensaje en la página web.
    - El uso de console.log() para realizar la validación de la edad.

Consideraciones:
  - Asegúrate de que el mensaje en la página HTML se muestre correctamente con los datos ingresados por el usuario.
  - La validación de la edad debe ser visible únicamente en la consola del navegador.
  - El código debe ser claro y estar correctamente estructurado.

Objetivo: Aplicar los conceptos básicos de JavaScript para la interacción con el usuario, la manipulación del DOM mediante document.write(), y el uso de la consola para mostrar información adicional.
