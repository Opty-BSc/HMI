function park() {
    var park = sessionStorage.getItem("park");
    sessionStorage.setItem("backPrev","../Suggestions/Parks/Park.html");
    switch (park) {
    case "1":
        park1();
        break;
    case "2":
        park2();
        break;
    case "3":
        park3();
        break;
    case "4":
        park4();
        break;
    case "5":
        park5();
        break;
    case "6":
        park6();
        break;
    case "7":
        park7();
        break;
    case "8":
        park8();
        break;
    case "9":
        park9();
        break;
    }
}

function park1() {
    var name = "Parque Florestal de Monsanto";
    if (name.length > 26) {
        document.getElementById("title").style.marginTop = "0.4pc";
    }
    document.getElementById("title").innerHTML = name;
    document.getElementById("restImg").src = "Imagens/Park1.jpg";
    document.getElementById("desc").innerHTML = "Garden with trees and a playground" + "<br>" +
                                                "Size: 26 hectares" + "<br>" + "Rating";
    sessionStorage.setItem("inputMaps", "Parque Florestal de Monsanto");
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/Star.png";
    isOpened(6,23);
}

function park2() {
    var name = "Quinta das Conchas e dos Lilases";
    if (name.length > 26) {
        document.getElementById("title").style.marginTop = "0.4pc";
    }
    document.getElementById("title").innerHTML = name;
    document.getElementById("restImg").src = "Imagens/Park2.jpg";
    document.getElementById("desc").innerHTML = "Peaceful park with rails and coffee" + "<br>" +
                                                "Size: 20 hectares" + "<br>" + "Rating";
    sessionStorage.setItem("inputMaps", "Quinta das Conchas e dos Lilases");
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/Star.png";
    document.getElementById("open").innerHTML = "Open ";
    document.getElementById("openImg").src = "../Imagens/Open.png";
    isOpened(5,23);
}

function park3() {
    var name = "Parque Eduardo VII";
    if (name.length > 26) {
        document.getElementById("title").style.marginTop = "0.4pc";
    }
    document.getElementById("title").innerHTML = name;
    document.getElementById("restImg").src = "Imagens/Park3.jpg";
    document.getElementById("desc").innerHTML = "Park with paths and central lawns" + "<br>" +
                                                "Size: 25 hectares" + "<br>" + "Rating";
    sessionStorage.setItem("inputMaps", "Parque Eduardo VII");
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/HalfStar.png";
    document.getElementById("open").innerHTML = "Closed ";
    document.getElementById("openImg").src = "../Imagens/Closed.svg";
    isOpened(6,22);
}


function park4() {
    var name = "Parque José Gomes Ferreira";
    if (name.length > 25) {
        document.getElementById("title").style.marginTop = "0.4pc";
    }
    document.getElementById("title").innerHTML = name;
    document.getElementById("restImg").src = "Imagens/Park4.jpg";
    document.getElementById("desc").innerHTML = "Old park very well preserved" + "<br>" +
                                                "Size: 22 hectares" + "<br>" + "Rating";
    sessionStorage.setItem("inputMaps", "Parque José Gomes Ferreira");
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/Star.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
    document.getElementById("open").innerHTML = "Open ";
    document.getElementById("openImg").src = "../Imagens/Open.png";
    isOpened(8,22);
}

function park5() {
    var name = "Parque Bensaúde";
    if (name.length > 26) {
        document.getElementById("title").style.marginTop = "0.4pc";
    }
    document.getElementById("title").innerHTML = name;
    document.getElementById("restImg").src = "Imagens/Park5.jpg";
    document.getElementById("desc").innerHTML = " Green space with picnic tables" + "<br>" +
                                                "Size: 17 hectares" + "<br>" + "Rating";
    sessionStorage.setItem("inputMaps", "Parque Bensaúde");
    document.getElementById("star1").src = "../Imagens/Star.png";
    document.getElementById("star2").src = "../Imagens/Star.png";
    document.getElementById("star3").src = "../Imagens/Star.png";
    document.getElementById("star4").src = "../Imagens/HalfStar.png";
    document.getElementById("star5").src = "../Imagens/EmptyStar.png";
    document.getElementById("open").innerHTML = "Open ";
    document.getElementById("openImg").src = "../Imagens/Open.png";
    isOpened(11,22);
}

function isOpened(hour1, hour2) {
    var times = new Date();

    if (sessionStorage.getItem("minutesIncrease") !== null) {
        minutes = sessionStorage.getItem("minutesIncrease");
        times = new Date(times.getTime() + minutes*60000);
    }
    actualHour = times.getHours(); 

    if (actualHour >= hour1 && actualHour < hour2) {
        document.getElementById("open").innerHTML = "Open ";
        document.getElementById("openImg").src = "../Imagens/Open.png";
        document.getElementById("openTime").innerHTML = " (" + hour1 + ":00 - " + hour2 + ":00) ";
    
    } else {
        document.getElementById("open").innerHTML = "Closed ";
        document.getElementById("openImg").src = "../Imagens/Closed.svg";
        document.getElementById("openTime").innerHTML = " (" + hour1 + ":00 - " + hour2 + ":00)";
    }
}

function directionsModal() {
    var times = new Date();
    var nRoot = times.getMinutes() % 7;

    if (sessionStorage.getItem("videoDuration") !== null) {
        document.getElementById("dir_mod").style.display = "block";
        document.getElementById("back").setAttribute('disabled', 'disabled');
        document.getElementById("home").setAttribute('disabled', 'disabled');
        document.getElementById("lock").setAttribute('disabled', 'disabled');

    } else {
        sessionStorage.setItem("nRoot",++nRoot);
        window.location = "../../Maps/Route.html";
    }
}

function noModal() {
    document.getElementById("dir_mod").style.display = "none";
    document.getElementById("back").removeAttribute('disabled');
    document.getElementById("home").removeAttribute('disabled');
    document.getElementById("lock").removeAttribute('disabled');
}

function yesModal() {
    var times = new Date();
    var nRoot = times.getMinutes() % 7;
    sessionStorage.removeItem("videoDuration");
    sessionStorage.removeItem("currentDuration");

    sessionStorage.setItem("nRoot",++nRoot);
    window.location = "../../Maps/Route.html";
}