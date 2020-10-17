function makeGETRequest(url) {
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status == 404) {
                    reject("Произошла ошибка");
                } else {
                    resolve(xhr.responseText);
                }
            }
        };

        xhr.open("GET", url, true);
        xhr.send();
    });
}

const url =
    "https://raw.githubusercontent.com/Andrey-Matanov/geekbrains_js_level2/master/data/basket.json";

makeGETRequest(url)
    .then((data) => console.log(data))
    .catch((error) => {
        throw new Error(error);
    });
