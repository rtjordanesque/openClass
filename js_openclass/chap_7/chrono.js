var compteurElt = document.getElementById("compteur");
var button = document.getElementById("demarrer");

function reduceCompteur(){
    var compteur = Number(compteurElt.textContent);
    console.log(compteurElt.textContent)
    if(button.textContent === "Démarrer"){
        console.log("==demarrer")
        compteurElt.textContent = compteur + 1;
    }
}

var intervalId = null;
button.addEventListener("click", function(e){
    if(button.textContent === "Démarrer"){
        intervalId = setInterval(reduceCompteur, 1000);
        e.textContent = "Arrêter";
    }
    else if(button.textContent === "Arrêter"){
        clearInterval(intervalId);
        e.textContent = "Démarrer";
    }
})

/*
Exercice : chronomètre by OC
*/
/*
var bouton = document.querySelector("button");
var compteurElt = document.getElementById("compteur");
var intervalId = null;
var demarre = false; // Etat du chronomètre : démarré (true) ou arrêté (false)

// Augmente le compteur de 1
function augmenterCompteur() {
    compteurElt.textContent = Number(compteurElt.textContent) + 1;
}

bouton.addEventListener("click", function () {
    if (!demarre) {
        // Démarre le chronomètre : appelle augmenterCompteur toutes les secondes
        intervalId = setInterval(augmenterCompteur, 1000);
        bouton.textContent = "Arrêter"; // Modifie le texte du bouton
    } else {
        clearInterval(intervalId); // Arrête le chronomètre
        bouton.textContent = "Démarrer"; // Modifie le texte du bouton
    }
    // Inverse la valeur de l'état du chronomètre
    demarre = !demarre;
});*/