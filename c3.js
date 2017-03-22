const Rx = require('rxjs/Rx');

const addSixPercent = x => x + (x * .06);
Rx.Observable.of(10.0, 20.0, 30.0, 40.0)
    .map(addSixPercent)
    .subscribe(x => console.log(x));
