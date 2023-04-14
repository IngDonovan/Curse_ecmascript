//declarando
class User {};
//instancia de una clase
// const newUser = new User();
class user {
    //metodos
    gretting() {
        return 'Hello';
    }
};

const salud = new user();
console.log(salud.gretting());
const bebe = new user();
console.log(bebe.gretting());

//constructor
class user2 {
    constructor(){
        console.log('Nuevo Usuario');
    }
    gretting() {
        return 'Hello';
    }
}
const david = new user2();


//this

class user3 {
    constructor(name){
        this.name = name;
    }//metodos

    speak() {
        return 'Hi';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user3('Ana');
console.log(ana.greeting());

// setter getters
class user4 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hi';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {//obtener
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper = new user4('David', 15);
console.log(bebeloper.uAge);   
console.log(bebeloper.uAge = 20);