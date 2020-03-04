let countries;

window.addEventListener('load', () => {
    let searchBtn = document.getElementById('searchBtn');
    countries = requestData("http://localhost/");

    searchBtn.addEventListener('click', () => {
        console.log(countries);
        let country = document.getElementById('country').value;
        let x=requestData("http://localhost/" + country);
        console.log(x);
    });

});

async function requestData(url) {
    let xhr = new XMLHttpRequest();

    let output = "";
    xhr.open("GET", url);
    xhr.onload = () => { output = JSON.parse(xhr.response) };
    xhr.send();

    return output;
}