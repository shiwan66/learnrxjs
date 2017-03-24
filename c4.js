const Rx = require('rxjs/Rx');
const axios = require('axios');

const url = 'https://api.github.com/users/JakeWharton/starred';

Rx.Observable.fromPromise(axios.get(url))
    .map(response => response.data)
    .concatAll()
    .take(2)
    .map(data => {
        return {
            avatar: data.owner.avatar_url,
            desc: data.description,
            forks: data.forks,
            login: data.owner.login,
            name: data.name,
            stars: data.stargazers_count,
            url: data.html_url
        }
    })
    .subscribe(
        response => console.log(response),
        error => console.log("Error occurred: ", error)
    );
