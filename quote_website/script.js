const api_url = "https://api.quotable.io/random";

async function getRandom(url){
    const rasult = await fetch(url);
    var data = await rasult.json();
    console.log(data);

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getRandom(api_url);

const quote = document.getElementById("quote");
const author = document.getElementById("author");

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML + " --- by" + author.innerHTML, "Tweet Window", "width=600, height=300");
}