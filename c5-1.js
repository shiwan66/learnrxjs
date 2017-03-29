const click1 = document.getElementById('click1');
const click2 = document.getElementById('click2');

const c1$ = Rx.Observable.fromEvent(click1, 'click')
    .map(event => ({
        x: event.pageX,
        y: event.pageY
    }));
const c2$ = Rx.Observable.fromEvent(click2, 'click')
    .map(event => ({
        x: event.pageX,
        y: event.pageY
    }));

const combined = Rx.Observable.merge(c1$, c2$)
    .subscribe(e => console.log(e));
