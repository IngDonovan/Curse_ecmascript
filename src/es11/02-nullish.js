const anotherNumber = 1;
const validate = anotherNumber ?? 5;//si este valor es nulo asignar 5
console.log(validate);
//1

const anotherNumber2 = null;
const validate2 = anotherNumber2 ?? 5;//si este valor es nulo asignar 5
console.log(validate2);
//5