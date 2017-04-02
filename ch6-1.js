const Rx = require('rxjs/Rx');

const letter$ = Rx.Observable.interval(1000)
    .map(num => String.fromCharCode(65 + num))
    .map(letter => `Source 1 -> ${letter}`);

const number$ = Rx.Observable.interval(1000)
    .map(num => `Source 2 -> ${num}`);

Rx.Observable.combineLatest(letter$, number$)
    .take(5)
    .subscribe(console.log);
