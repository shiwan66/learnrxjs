window.onload = function () {
    const click1 = document.getElementById('click1');
    const click2 = document.getElementById('click2');

    const c1$ = Rx.Observable.fromEvent(click1, 'click');
    const c2$ = Rx.Observable.fromEvent(click2, 'click');

    const combined = Rx.Observable.merge(c1$, c2$)
        .subscribe(e => console.log(e));
};
