function infosLiens(){
    var link = document.getElementsByTagName("a");
    var sizeLink = link.length;
    console.log(sizeLink);
    console.log(link[0].getAttribute("href"));
    console.log(link[sizeLink-1].getAttribute("href"));
}

function possede(id, classe){
    var instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    } else {
        console.log("Aucun élément ne possède l'identifiant " + id);
    }  
}

infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur