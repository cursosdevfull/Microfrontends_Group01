const file = require("./prueba.txt");
const util = require("./util.js");

const user = {
  name: "Javier",
  lastname: "Armando",
  age: 34,
};

const clon = Object.assign({}, user);
clon.name = util.upper(clon.name);

console.log(clon);
