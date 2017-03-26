const Rx = require('rxjs/Rx');

const Money = (currency, val) => ({
    value: () => val,
    currency: () => currency,
    toString: () => `${currency} ${val}`
});

const newRandomNumber = () => Math.floor(Math.random() * 100);
console.log(newRandomNumber());
