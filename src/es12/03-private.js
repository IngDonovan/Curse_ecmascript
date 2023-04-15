class user4 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak() {//se vuelve privado
        return 'Hi';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const bebeloper = new user4('David', 15);
console.log(bebeloper.uAge);   
console.log(bebeloper.uAge = 20);