const Rx = require('rxjs/Rx');

const isEven = num => num % 2 === 0;
const square = num => num * num;
const add = (a, b) => a + b;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const obs = Rx.Observable.from(arr);

obs.filter(isEven)
    .map(square)
    .reduce(add)
    .subscribe(x => console.log(x));
