const operaciones = require("./operaciones");

const agruments = process.argv.slice(2);
const [funcion, ...args] = agruments;

switch (funcion) {
  case "leer":
    operaciones.leer();
    break;

  case "registrar":
    operaciones.registrar(args);
    break;

  default:
    console.log("Función incorrecta");
    break;
}
