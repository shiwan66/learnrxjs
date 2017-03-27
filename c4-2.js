testData = [
    'github.com/Reactive-Extensions/RxJS',
    'github.com/ReactiveX/RxJS',
    'xgrommx.github.io/rx-book',
    'reactivex.io',
    'egghead.io/technologies/rx',
    'rxmarbles.com',
    'https://www.manning.com/books/rxjs-in-action'
];

const sendRequest = function (arr, query) {
    return arr.filter(item => {
        return query.length > 0 && item.startsWith(query);
    });
};

window.onload = function () {
    const searchBox = document.querySelector('#search'); //-> <input>
    const results = document.querySelector('#results'); //-> <ul>

    Rx.Observable.fromEvent(searchBox, 'keyup')
        .debounceTime(1000)
        .pluck('target', 'value')
        .do(query => console.log(`Querying for ${query}...`))
        .map(query => sendRequest(testData, query))
        .subscribe(result => {
            if (result.length === 0) {
                clearResults(results);
            }
            else {
                clearResults(results);
                appendResults(result, results);
            }
        });
};

function clearResults(container) {
    while (container.childElementCount > 0) {
        container.removeChild(container.firstChild);
    }
}

function appendResults(results, container) {
    for (let result of results) {
        let li = document.createElement('li');
        let text = document.createTextNode(result);
        li.appendChild(text);
        container.appendChild(li);
    }
}
