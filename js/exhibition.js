let imagensof = [
    "./Img/dalascowboys.jpg",
    "./Img/vasco.jpg",
    "./Img/liverpool.jpg", 
    "./Img/fifa.jpg",
    "./Img/cblol.png",
    "./Img/champions.jpg", 
    "./Img/nfl.jpg",
    "./Img/brasileirao.jpg", 
    "./Img/libertadores.jpeg", 
    "./Img/premierleague.jpg"
]

let pagina = 1;

function carregarImagens() { 
    var html ="";
   
    for (let i in imagensof){

        html +="<img src='" + imagensof[i] + "' />" ;

    }

    document.querySelector('.carosel-images').innerHTML = html;

}

carregarImagens();


function next() {

    document.querySelector('.carosel-images').innerHTML = "";
    if (pagina == 1){
         imagensof = [
            "./Img/dalascowboys.jpg",
            "./Img/vasco.jpg",
            "./Img/liverpool.jpg", 
            "./Img/fifa.jpg",
            "./Img/cblol.png"
        ];
        carregarImagens();
        pagina = 2;
        
    } else {
        imagensof = [
            "./Img/champions.jpg", 
            "./Img/nfl.jpg",
            "./Img/brasileirao.jpg", 
            "./Img/libertadores.jpeg", 
            "./Img/premierleague.jpg"
        ];
        carregarImagens();
        pagina = 1;
        
    }

}

        



