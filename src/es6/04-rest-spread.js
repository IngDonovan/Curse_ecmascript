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

//spread operator
let person = {
    name:'oscar',
    age: 28,
};
let country = 'MX';

let data = {...person, country};//la propagacion la hacemos gracias al recurso ...
let data2 = {id: 1, ...person, country};
console.log(data);
console.log(data2);

//parametros rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

//ejercicio clase 9

export function solution(
    json1 = {
      name: 'Mr. Michi',
      food: 'Pescado',
    },
    json2 = {
      age: 12,
      color: 'Blanco',
    }
  ) {
    let solucion = {...json1, ...json2};
    return solucion;
  }


  export function solution2(json1, json2) {
    json1 = json1 || { name: "Mr. Michi", food: "Pescado" };
    json2 = json2 || { age: 12, color: "Blanco" };
  
    return { ...json1, ...json2 }
  }





