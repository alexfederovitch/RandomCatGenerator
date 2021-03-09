document.getElementById("button").onclick = function() {fetchURL()};

const fetchURL = () => {
    let url = "https://api.thecatapi.com/v1/images/search";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].url);
        generateCat(data);
    })
}

const generateCat = (data) => {
    let image = document.createElement('img');
    let div = document.getElementById('display');
    image.src = data[0].url;
    div.appendChild(image);
}