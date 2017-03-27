const Rx = require('rxjs/Rx');

Rx.Observable.timer(0, 50)
    .buffer(Rx.Observable.timer(500))
    .subscribe(val => console.log(`Data in buffer: [${val}]`));
