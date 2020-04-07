function park() {
    var share = sessionStorage.getItem("park");
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
    document.getElementById("backLink").href = "Park.html";
    document.getElementById("restImg").src = "Imagens/Park1.jpg";
    document.getElementById("desc").innerHTML = "Parque Florestal de Monsanto" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/Star.png";
}

function share2() {
    document.getElementById("backLink").href = "Park.html";
    document.getElementById("restImg").src = "Imagens/Park2.jpg";
    document.getElementById("desc").innerHTML = "Quinta das Conchas e dos Lilases" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/Star.png";  
}

function share3() {
    document.getElementById("backLink").href = "Park.html";
    document.getElementById("restImg").src = "Imagens/Park3.jpg";
    document.getElementById("desc").innerHTML = "Parque Eduardo VII" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/HalfStar.png";
}

function share4() {
    document.getElementById("backLink").href = "Park.html";
    document.getElementById("restImg").src = "Imagens/Park4.jpg";
    document.getElementById("desc").innerHTML = "Parque José Gomes Ferreira" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share5() {
    document.getElementById("backLink").href = "Park.html";
    document.getElementById("restImg").src = "Imagens/Park5.jpg";
    document.getElementById("desc").innerHTML = "Parque Bensaúde" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/HalfStar.png";
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