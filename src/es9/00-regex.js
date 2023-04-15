const regex = /(\d{4})-(\d{2})-(\d{2})/; //año 4 caracteres mes 2 y dia 2
const matchers = regex.exec('2022-04-15');
console.table(matchers);

/*┌─────────┬──────────────┐
/ │ (index) │    Values    │
/ ├─────────┼──────────────┤
/ │    0    │ '2022-04-15' │
/ │    1    │    '2022'    │
/ │    2    │     '04'     │
/ │    3    │     '15'     │
/ │  index  │      0       │
/ │  input  │ '2022-04-15' │
/ │ groups  │  undefined   │
/ └─────────┴──────────────┘*/