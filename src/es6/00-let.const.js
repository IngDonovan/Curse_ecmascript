var lastName = 'David';//Declarado y Asignado
lastName = 'Oscar';//ReAsignado
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);//TypeError: Assignment to constant variable.

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple';//function scope
        let fruit2 = 'Kiwi';// block scope, porque solo se pueden usar dentro del if
        const fruit3 = 'Banana'//block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();// ReferenceError: fruit2 is not defined