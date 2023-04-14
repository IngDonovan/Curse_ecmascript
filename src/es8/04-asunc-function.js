const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)//quitamos el if
            ? setTimeout(() => resolve('AsinC !!'), 2000)
            //   :   para hacer referencia al else
            : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello !!!');
} 

console.log('Before');
anotherFn();
console.log('After');