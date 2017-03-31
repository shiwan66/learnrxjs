const Rx = require('rxjs/Rx');

Rx.Observable.of('a', 'b', 'c', 'a', 'a', 'b', 'b')
    .distinctUntilChanged()
    .subscribe(console.log);
