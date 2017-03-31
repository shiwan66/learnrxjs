const panel = document.querySelector('#dragTarget');
const mouseDown$ = Rx.Observable.fromEvent(panel, 'mousedown');
const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup');
const mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove');

const drag$ = mouseDown$.concatMap(() => mouseMove$.takeUntil(mouseUp$));

drag$.forEach(event => {
    panel.style.left = event.clientX + 'px';
    panel.style.top = event.clientY + 'px';
});
