//Criação de variáveis para exibição das fotos pré selecionadas nos arquivos.

let imagens = [
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

    //Criação de variáveis para legenda nas imagens conforme serem clicadas.
    
    let usernames = [
        "@twitterusername1",
        "@twitterusername2",
        "@twitterusername3",
        "@twitterusername4",
        "@twitterusername5",
        "@twitterusername6",
        "@twitterusername7",
        "@twitterusername8",
        "@twitterusername9",
        "@twitterusername10"
    ]
    
    var page = 0;
    
// Função para troca das seleções de fotos através dos botões e clonar o parametro do html.

function uploadImages(pageParam) {
    console.log("pageParam ", pageParam);

    if(pageParam > 2){
        pageParam = 1;
    
    }else if(pageParam < 1){
        pageParam = 2;
   }

    if (pageParam === 1) {
        document.querySelector('#button2').style['background-color'] = 'gray';
        document.querySelector('#button1').style['background-color'] = '#5469f9';
        page=1
        pageParam = 1
        
    } else if (pageParam === 2) {
        page=2
        pageParam = 2
        document.querySelector('#button2').style['background-color'] = '#5469f9';
        document.querySelector('#button1').style['background-color'] = 'gray';
    } 
    
    page = pageParam;
    pageEnd = pageParam*5
    var html = ""

    for (i= pageEnd-5; i<pageEnd; i++) {

        var img = document.querySelector('.exp1').cloneNode(true)
        img.style["background-image"]= "url("+imagens[i]+")";
        img.style.display="block"; 
        html += img.outerHTML
    }

    document.querySelector('.container_images').innerHTML = html;

    carregarModal() 
}

// Função para executar a modal e os textos que irão sobre a imagem

function carregarModal(){

    let imagens_modal = document.querySelectorAll('.photo');
    let modal = document.querySelector('.modal');
    let modalImg = document.querySelector('#modal_img');
    let btClose = document.querySelector('#bt_close');
    let textUser = document.querySelector('.text_twitter');
    console.log("textUser ",modal);

    for(let i =0; i<imagens_modal.length;i++){
        imagens_modal[i].addEventListener('click',function(){
            modalImg.src = imagens[(page - 1)*5+i];
            modal.classList.toggle('modal_active');
            textUser.innerHTML = usernames[(page - 1)*5+i]
        });
    }
    btClose.addEventListener('click', function(e){
    modal.classList.remove('modal_active');
    });

}
uploadImages(1)