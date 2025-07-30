const xhttp = new XMLHttpRequest();
// XMLHttpRequset é um objeto que permite acessar alguma página. 
const url = `https://dragonball-api.com/api/characters?limit=100`;
xhttp.open("GET", url);
xhttp.responseType = 'json';
xhttp.send();
console.log(xhttp.response);
xhttp.onload = function () {
    const dados = xhttp.response;
    const personagens = dados.items;
    console.log(personagens[0].name);
    const total = personagens.length; // saber total de personagens 
    console.log(total) // exibir no console o total de personagens 
    let cards = '';

    for (let i = 0; i < total; i++) {

        // variavel pode ser o nome em portugues
        // depois do . é o nome na api 

        const id = personagens[i].id;
        const nome = personagens[i].name;
        const imagem = personagens[i].image;

        cards += `<div class="card-db bg-white shadow rounded-4 position-relative d-flex flex-column">`;
        cards += `<img src="${imagem}" class="escala position-absolute w-100 img-db">`;
        cards += `<p class="favorito p-3 text-end text-warning"><i id="favorito${id}" onclick="favoritar(${id});" class="fa-regular fa-star" type="button" ></i></p>`;
        cards += `<p class="mt-auto text-center texto-db">${nome}</p>`;
        cards += `</div>`;
    }
    document.getElementById("personagens").innerHTML = cards;
    console.log(document.cookie);
cookies = document.cookie.split(";")
console.log(cookies);
for (let c = 0; c < cookies.length; c++){
    const favorito = cookies [c].split("=");
    console.log(favorito); 
    console.log(favorito[1]);
    if(favorito[1]){favoritar(favorito[1]);}

}

};

function favoritar(codigo) {
    const fav = document.getElementById(`favorito${codigo}`);

    if (fav.classList.contains("fa-regular")) {
        fav.classList.remove("fa-regular", "text-warning");
        fav.classList.add("fa-solid", "text-danger");
        document.cookie = `favorito${codigo}=${codigo}`;
    }
    else {
        fav.classList.add("fa-regular", "text-warning");
        fav.classList.remove("fa-solid", "text-danger");
        document.cookie = `favorito${codigo}=${codigo}; expires=Thu,01-Jan-1970 00:00:01 GMT;`;
        
    }

};

