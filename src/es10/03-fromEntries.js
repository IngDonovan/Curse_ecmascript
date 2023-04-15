const entries = new Map([['name','Oscar'], ['age', 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));

/* Map(2) { 'name' => 'Oscar', 'age' => 34 }
{ name: 'Oscar', age: 34 }
 */