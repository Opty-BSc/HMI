function rest() {
    var share = sessionStorage.getItem("restaurant");
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
    document.getElementById("backLink").href = "Restaurant.html";
    document.getElementById("restImg").src = "Imagens/Restaurant1.png";
    document.getElementById("desc").innerHTML = "Jamie's Italian" + "<br>" + "Rua Príncipe Real" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/Star.png";
}


function share2() {
    document.getElementById("backLink").href = "Restaurant.html";
    document.getElementById("restImg").src = "Imagens/Restaurant2.png";
    document.getElementById("desc").innerHTML = "The Green Affair" + "<br>" + "Rua Duque Ávila" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/Star.png";  
}

function share3() {
    document.getElementById("backLink").href = "Restaurant.html";
    document.getElementById("restImg").src = "Imagens/Restaurant3.png";
    document.getElementById("desc").innerHTML = "Zero Zero" + "<br>" + "Praça da Alameda" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/HalfStar.png";
}


function share4() {
    document.getElementById("backLink").href = "Restaurant.html";
    document.getElementById("restImg").src = "Imagens/Restaurant4.png";
    document.getElementById("desc").innerHTML = "Boa-Bao" + "<br>" + "Largo de Pinheiro" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share5() {
    document.getElementById("backLink").href = "Restaurant.html";
    document.getElementById("restImg").src = "Imagens/Restaurant5.png";
    document.getElementById("desc").innerHTML = "Contrabando" + "<br>" + "Praça 24 de Julho" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/HalfStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share6() {
    document.getElementById("backLink").href = "Restaurant.html";
    document.getElementById("restImg").src = "Imagens/Restaurant6.png";
    document.getElementById("desc").innerHTML = "Hamburgueria Portuguesa" + "<br>" + "Largo Conde Barão" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/HalfStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share7() {
    document.getElementById("backLink").href = "Restaurant.html";
    document.getElementById("restImg").src = "Imagens/Restaurant7.png";
    document.getElementById("desc").innerHTML = "Sea Me" + "<br>" + "Rua do Loreto" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/EmptyStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share8() {
    document.getElementById("backLink").href = "Restaurant.html";
    document.getElementById("restImg").src = "Imagens/Restaurant8.png";
    document.getElementById("desc").innerHTML = "Nómada" + "<br>" + "Avenida Visconde" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/EmptyStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share9() {
    document.getElementById("backLink").href = "Restaurant.html";
    document.getElementById("restImg").src = "Imagens/Restaurant9.png";
    document.getElementById("desc").innerHTML = "Mez Cais LX" + "<br>" + "Rua Rodrigues" +
                                                "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/HalfStar.png";
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