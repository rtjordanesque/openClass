// Création d'une requête HTTP
/*var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://127.0.0.1:8080/edsa-javascriptoc/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null);*/


function afficher(reponse) {
    console.log(reponse);
}


//ajaxGet("http://127.0.0.1:8080/edsa-javascriptoc/langages.txt", afficher);

// avec fonction anonyme
/*ajaxGet("http://127.0.0.1:8080/edsa-javascriptoc/langages.txt", function (reponse) {
    var reponseSplit = reponse.split(';');
    var ulElt = document.getElementById("langages");
    reponseSplit.forEach(function(rep){
        var liElt = document.createElement("li");
        liElt.textContent = rep;
        ulElt.appendChild(liElt);
    });
    
});*/
 
//JSON
var avion = {
    marque: "Airbus",
    couleur: "A320"
};
//console.log(avion);
// Transforme l'objet JavaScript en chaîne de caractères JSON
var texteAvion = JSON.stringify(avion);
//console.log(texteAvion);
// Transforme la chaîne de caractères JSON en objet JavaScript
//console.log(JSON.parse(texteAvion));
//JSON tableau
var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
//console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
//console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
//console.log(JSON.parse(texteAvions));

/*ajaxGet("http://127.0.0.1:8080/edsa-javascriptoc/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});*/