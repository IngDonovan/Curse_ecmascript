//sacado la base de es6 promise

const otraFuncion = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Lo resolvimos');
        }else {
            reject('No funcionó');
        }
    })
}

otraFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finnaly'));


    //otra mejora


    const anotherFunction = () => {
        return new Promise((resolve, reject) => {
            if (true) {
                resolve("Hey");
            } else {
                reject("Whooops!");
            }
        })
    }
    
    anotherFunction()
        .then(response => console.log('Then...' + response))
        .catch(err => console.log('catch...' + err))
        .finally(()=> console.log('Finally'));