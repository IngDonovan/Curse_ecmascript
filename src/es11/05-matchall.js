//una expresion regular

const regex = /\b(Apple)+\b/g; //filtrar una palabra

const fruit = 'Apple, Banana, Kiwi, Piña, etc. etc. etc.';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

/* [
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Banana, Kiwi, Piña, etc. etc. etc.',
  groups: undefined
] */