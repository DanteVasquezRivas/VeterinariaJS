const { readFileSync, writeFileSync, write } = require("fs");

const leer = () => {
  const citas = JSON.parse(readFileSync("citas.json", "utf8"));

  console.log("Citas registradas");
  console.log(citas);
  return citas;
};

const registrar = (args) => {
  const [nombre_animal, edad, tipo_animal, color_animal, enfermedad] = args;
  const citas = leer();

  const new_date = {
    nombre_animal,
    edad,
    tipo_animal,
    color_animal,
    enfermedad,
  };
  citas.push(new_date);
  writeFileSync("citas.json", JSON.stringify(citas));

  console.log("Registrando cita");
  console.log(new_date);
};

module.exports = {
  leer,
  registrar,
};
