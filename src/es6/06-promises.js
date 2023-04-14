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
    .catch(err => console.log(err));