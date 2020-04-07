function mon() {
    var share = sessionStorage.getItem("monument");
    switch (share) {
        case "1":
            share1();
            break;
        case "2":
            share2();
            break;
        case "3":
            share3();
            break;
        case "4":
            share4();
            break;
        case "5":
            share5();
            break;
        case "6":
            share6();
            break;
        case "7":
            share7();
            break;
        case "8":
            share8();
            break;
        case "9":
            share9();
            break;
    }
}

function share1() {
    document.getElementById("backLink").href = "Monument.html";
    document.getElementById("restImg").src = "Imagens/Monument1.jpg";
    document.getElementById("desc").innerHTML = "Torre de Belém" + "<br>" + "Avenida Brasília" +
                                                "<br>"+ "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/Star.png";
}


function share2() {
    document.getElementById("backLink").href = "Monument.html";
    document.getElementById("restImg").src = "Imagens/Monument2.jpg";
    document.getElementById("desc").innerHTML = "Mosteiro dos Jerónimos" + "<br>" + "Praça do Império" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/Star.png";
}

function share3() {
    document.getElementById("backLink").href = "Monument.html";
    document.getElementById("restImg").src = "Imagens/Monument3.jpg";
    document.getElementById("desc").innerHTML = "Castelo de São Jorge" + "<br>" + "Rua Cruz Castelo" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/HalfStar.png";
}


function share4() {
    document.getElementById("backLink").href = "Monument.html";
    document.getElementById("restImg").src = "Imagens/Monument4.jpg";
    document.getElementById("desc").innerHTML = "Elevador de Santa Justa" + "<br>" + "Rua do Ouro" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share5() {
    document.getElementById("backLink").href = "Monument.html";
    document.getElementById("restImg").src = "Imagens/Monument5.jpg";
    document.getElementById("desc").innerHTML = "Oceanário de Lisboa" + "<br>" + "Avenida D. Carlos I" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/HalfStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share6() {
    document.getElementById("backLink").href = "Monument.html";
    document.getElementById("restImg").src = "Imagens/Monument6.jpg";
    document.getElementById("desc").innerHTML = "Padrão dos Descobrimentos" + "<br>" + "Avenida Brasília" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/HalfStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share7() {
    document.getElementById("backLink").href = "Monument.html";
    document.getElementById("restImg").src = "Imagens/Monument7.jpg";
    document.getElementById("desc").innerHTML = "Santuário Nacional de Cristo Rei" + "<br>" + "Almada" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/EmptyStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
    
}

function share8() {
    document.getElementById("backLink").href = "Monument.html";
    document.getElementById("restImg").src = "Imagens/Monument8.png";
    document.getElementById("desc").innerHTML = "Sé de Lisboa" + "<br>" + "Lago da Sé" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/EmptyStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function noModal() {
    document.getElementById("modal_info").innerHTML = "Not Shared!";
    document.getElementById("modal_id").style.display = "block";
    document.getElementById("back").setAttribute('disabled', 'disabled');
    document.getElementById("home").setAttribute('disabled', 'disabled');
    document.getElementById("lock").setAttribute('disabled', 'disabled');
}

function yesModal() {
    document.getElementById("modal_info").innerHTML = "Successfully Shared!";
    document.getElementById("modal_id").style.display = "block";
    document.getElementById("back").setAttribute('disabled', 'disabled');
    document.getElementById("home").setAttribute('disabled', 'disabled');
    document.getElementById("lock").setAttribute('disabled', 'disabled');
}