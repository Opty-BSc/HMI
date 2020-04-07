function bar() {
    var share = sessionStorage.getItem("bar");
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
        default:
            break;
    }
}

function share1() {
    document.getElementById("backLink").href = "Bar.html";
    document.getElementById("restImg").src = "Imagens/Bar1.jpg";
    document.getElementById("desc").innerHTML = "Bar TR3S" + "<br>" + "Rua Ruben Leitão" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/Star.png";
}

function share2() {
    document.getElementById("backLink").href = "Bar.html";
    document.getElementById("restImg").src = "Imagens/Bar2.jpg";
    document.getElementById("desc").innerHTML = "Matriz Pombalina" + "<br>" + "Rua Trinas" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/Star.png";  
}

function share3() {
    document.getElementById("backLink").href = "Bar.html";
    document.getElementById("restImg").src = "Imagens/Bar3.jpg";
    document.getElementById("desc").innerHTML = "Foxtrot" + "<br>" + "Avenida Teresa" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/HalfStar.png";
}


function share4() {
    document.getElementById("backLink").href = "Bar.html";
    document.getElementById("restImg").src = "Imagems/b4.jpg";
    document.getElementById("desc").innerHTML = "Bruxa Beer Bar" + "<br>" + "Rua São Mamede" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share5() {
    document.getElementById("backLink").href = "Bar.html";
    document.getElementById("restImg").src = "Imagens/Bar5.jpg";
    document.getElementById("desc").innerHTML = "Shelter Bar" + "<br>" + "Rua da Palmeira" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/HalfStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share6() {
    document.getElementById("backLink").href = "Bar.html";
    document.getElementById("restImg").src = "Imagens/Bar6.jpg";
    document.getElementById("desc").innerHTML = "Pavilhão Chinês" + "<br>" + "Rua D. Pedro V" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/HalfStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
}

function share7() {
    document.getElementById("backLink").href = "Bar.html";
    document.getElementById("restImg").src = "Imagens/Bar7.jpg";
    document.getElementById("desc").innerHTML = "Templários Bar" + "<br>" + "Rua Flores do Lima" + "<br>" + "Rating";
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/EmptyStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
    
}

function share8() {
    document.getElementById("backLink").href = "Bar.html";
    document.getElementById("restImg").src = "Imagens/Bar8.jpg";
    document.getElementById("desc").innerHTML = "Sky Bar" + "<br>" + "Avenida D. João II" + "<br>" + "Rating";
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