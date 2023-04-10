//funciones de tipo flecha o arrow Function es una alternativa compacta a una expresion de funcion tradicional, pero es limitada y no se puede utilizar en todas las situaciones

//funcion normal

function square(num) {
    return num * num;
}

//con arrow function, al ser una funcion se recomienda const
const square = (num) => {
    return num * num;
}

const square = num => num * num;//con el return implicito

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions