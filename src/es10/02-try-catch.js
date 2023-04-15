try {
    hello();
}catch (error) {
    console.log(error);
}
/* ReferenceError: hello is not defined
at file:///d:/Frontend/JavaScript/Curso%20de%20ECMAScript%20Historia%20y%20Versiones%20de%20JavaScript/Curse_ecmascript/src/es10/tempCodeRunnerFile.js:2:5
at ModuleJob.run (node:internal/modules/esm/module_job:193:25) */

try {
    hello();
}catch{
    console.log('Esto es un error');
}

//Esto es un error