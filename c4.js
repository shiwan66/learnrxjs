window.onload = function () {
    const url = 'https://api.github.com/users/JakeWharton/starred';
    const cardimage = document.querySelector("#cardimage");
    const cardtitle = document.querySelector("#cardtitle");
    const cardcontent = document.querySelector("#cardcontent");
    const cardlink = document.querySelector("#cardlink");

    Rx.Observable.fromPromise(axios.get(url))
        .map(response => response.data)
        .concatAll()
        .take(1)
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
            response => {
                console.log(response);
                cardimage.src = response.avatar;
                cardtitle.innerHTML = response.name;
                cardcontent.innerHTML = response.desc;
                cardlink.href = response.url;
                cardlink.innerHTML = response.login + " - " + response.name;
            },
            error => console.log("Error occurred: ", error)
        );
};
