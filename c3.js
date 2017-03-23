const Rx = require('rxjs/Rx');

const addSixPercent = x => x + (x * .06);

Rx.Observable.of(10.0, 20.0, 30.0, 40.0)
    .map(addSixPercent)
    .subscribe(x => console.log(x));

Rx.Observable.from([
    'The quick brown fox',
    'jumps over the lazy dog'])
    .flatMap(str => str.split(' '))
    .filter(str => str.includes('o'))
    .scan((acc, str) => {
        acc += str;
        return acc;
    }, "")
    .subscribe(x => console.log(x));

let candidates = [
    {name: 'Brendan Eich', experience: 'JavaScript Inventor', testing: { nest: true }},
    {name: 'Emmet Brown', experience: 'Historian', testing: { nest: false }},
    {name: 'George Lucas', experience: 'Sci-fi writer', testing: { nest: true }},
    {name: 'Alberto Perez', experience: 'Zumba Instructor', testing: { nest: true }},
    {name: 'Bjarne Stroustrup', experience: 'C++ Developer', testing: { nest: true }}
];

Rx.Observable.from(candidates)
    .pluck('testing', 'nest')
    .take(2)
    .do(name => console.log(name))
    .subscribe();
