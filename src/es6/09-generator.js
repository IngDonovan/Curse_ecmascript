//generator

function* iterate(array) {
    for (const value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* iterate2 (object) {
    for (const value in object) {
        yield value;
    }
}

const nuevoObjeto = iterate2({ a: 1, b: 2, c: 3 });

console.log(nuevoObjeto.next().value);
console.log(nuevoObjeto.next().value);
console.log(nuevoObjeto.next().value);
console.log(nuevoObjeto.next().value);


//ejercicio

function* getId() {
    let michiId = 1
    while (true) {
      yield michiId++
    }
  }
  
  const michiId = getId()
  console.log(michiId.next().value);
  console.log(michiId.next().value);
  console.log(michiId.next().value);