function creerElementLien(lien) {
    const titreElt = document.createElement("a");
    titreElt.href = lien.url;
    titreElt.style.color = "#428bca";
    titreElt.style.textDecoration = "none";
    titreElt.style.marginRight = "5px";
    titreElt.appendChild(document.createTextNode(lien.titre));

    const urlElt = document.createElement("span");
    urlElt.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    const ligneTitreElt = document.createElement("h4");
    ligneTitreElt.style.margin = "0px";
    ligneTitreElt.appendChild(titreElt);
    ligneTitreElt.appendChild(urlElt);

    // Cette ligne contient l'auteur
    const ligneDetailsElt = document.createElement("span");
    ligneDetailsElt.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    const divLienElt = document.createElement("div");
    divLienElt.classList.add("lien");
    divLienElt.appendChild(ligneTitreElt);
    divLienElt.appendChild(ligneDetailsElt);

    return divLienElt;
}

const contenuElt = document.getElementById("contenu");

//Récupération depuis le serveur
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function(reponse){
    const liens = JSON.parse(reponse);
    liens.forEach(lien =>{
        const lienElt = creerElementLien(lien);
        contenuElt.appendChild(lienElt);
    })
});

// Crée et renvoie un élément DOM de type input
function creerElementInput(placeholder, taille) {
    const inputElt = document.createElement("input");
    inputElt.type = "text";
    inputElt.setAttribute("placeholder", placeholder);
    inputElt.setAttribute("size", taille);
    inputElt.setAttribute("required", "true");
    return inputElt;
}

const ajouterLienElt = document.getElementById("ajoutLien");

// Gère l'ajout d'un nouveau lien
ajouterLienElt.addEventListener("click", function () {
    
    //creation formulaire
    const auteurElt = creerElementInput("Entrez votre nom", 20);
    const titreElt = creerElementInput("Entrez le titre du lien", 40);
    const urlElt = creerElementInput("Entrez l'URL du lien", 40);

    const ajoutElt = document.createElement("input");
    ajoutElt.type = "submit";
    ajoutElt.value = "Ajouter";

    const formAjoutElt = document.createElement("form");
    formAjoutElt.appendChild(auteurElt);
    formAjoutElt.appendChild(titreElt);
    formAjoutElt.appendChild(urlElt);
    formAjoutElt.appendChild(ajoutElt);

    const p = document.querySelector("p");
    // Remplace le bouton d'ajout par le formulaire d'ajout
    p.replaceChild(formAjoutElt, ajouterLienElt);

    // Ajoute le nouveau lien
    formAjoutElt.addEventListener("submit", function (e) {
        
        const url = urlElt.value;
        // Si l'URL ne commence ni par "http://" ni par "https://"
        if ((url.indexOf("http://") !== 0) && (url.indexOf("https://") !== 0)) {
            // On la préfixe par "http://"
            url = "http://" + url;
        }

        // Création de l'objet contenant les données du nouveau lien
        const lien = {
            titre: titreElt.value,
            url: url,
            auteur: auteurElt.value
        };

        ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", lien, function(reponse){
            const lienElt = creerElementLien(lien);
            // Ajoute le nouveau lien en haut de la liste
            contenuElt.insertBefore(lienElt, contenuElt.firstChild);
            
            // Création du message d'information
            const infoElt = document.createElement("div");
            infoElt.classList.add("info");
            infoElt.textContent = "Le lien \"" + lien.titre + "\" a bien été ajouté.";
            p.insertBefore(infoElt, ajouterLienElt);
            // Suppresion du message après 2 secondes
            setTimeout(function () {
                p.removeChild(infoElt);
            }, 2000);
        }, 
        true
        );

        // Remplace le formulaire d'ajout par le bouton d'ajout
        p.replaceChild(ajouterLienElt, formAjoutElt);
    });
});


