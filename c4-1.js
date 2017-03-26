// const Rx = require('rxjs/Rx');

const Money = function (currency, val) {
    return {
        value: () => val,
        currency: () => currency,
        toString: () => `${currency} ${val}`
    }
};

const newRandomNumber = () => Math.floor(Math.random() * 100);

Rx.Observable.interval(2000)
    .skip(1)
    .take(5)
    .map(num => new Money('AUD', newRandomNumber()))
    .subscribe(price => document.querySelector('#price').textContent = price);

Rx.Observable.fromEvent(document, 'click')
    .debounceTime(1000)
    .subscribe(c => console.log(`Clicked at position ${c.clientX} and ${c.clientY}`));
