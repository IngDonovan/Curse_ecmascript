//diferente forma de entrarl al global

console.log(window);//solo del lado del navegador
//del lado del node.js 
//ReferenceError: window is not defined

console.log(global);//del lado del node.js 
/*ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],......*/

console.log(self); //webworker desde el navegador
console.log(globalThis);//por el lado del node y del navegador
//facilita la portabilidad del codigo de entorno a entorno
