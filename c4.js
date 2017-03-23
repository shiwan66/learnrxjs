const Rx = require('rxjs/Rx');
const axios = require('axios');

const url = 'https://api.github.com/users/DylanGraham';

Rx.Observable.of(url)
    .flatMap(requestUrl => Rx.Observable.fromPromise(axios.get(requestUrl)))
    .subscribe(response => console.log(response.data));
