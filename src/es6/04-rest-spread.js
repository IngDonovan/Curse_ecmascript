//arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits; //va a traer a [a y b] de fruits
console.log(a, b);
//tambien
console.log(a, fruits[1]);//consecto de desestructuracion, es mas facil asignarlo a una variable y usarlo

//con objetos: object desctructuring
let user = {userName: 'Oscar', age: 34};
let {userName, age} = user;
console.log(userName, age);


