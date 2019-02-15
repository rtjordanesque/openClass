/* 
Activité 2
*/

var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

var contenu = document.getElementById("contenu");
//création du conteneur div 
var divElt = document.createElement("div");
divElt.id = "addlinks";
//création du bouton ajout lien
var buttonElt = document.createElement("button");
buttonElt.textContent = "Ajouter un lien";
function afficheContenu() {

    listeLiens.forEach(function (lien) {
        // création du titre
        var titre = document.createElement("a");
        titre.textContent = lien.titre;
        titre.href = lien.url;
        titre.target = "_blank";
        titre.style.textDecoration = "none";
        titre.style.color = "#428bca";

        // création de l'encart
        var encart = document.createElement("p");
        encart.className = "lien";
        encart.style.fontWeight = "bold";

        // auteur
        var auteur = "Ajouté par " + lien.auteur;

        // création du reste de la ligne (après le titre)
        var resteLigne = document.createElement("span");
        var sautLigne = document.createElement("br");
        resteLigne.appendChild(document.createTextNode(" " + lien.url));
        resteLigne.appendChild(sautLigne);
        resteLigne.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

        // ajout du titre et du reste de la ligne à l'encart
        encart.appendChild(titre);
        encart.appendChild(resteLigne);

        // ajout de l'encart au contenu
        contenu.appendChild(encart);
        //contenu.insertAdjacentElement("beforeend",encart);
    });
    //ajout bouton dans le conteneur
    divElt.appendChild(buttonElt);
    contenu.insertAdjacentElement("afterbegin", divElt);
}
afficheContenu();

//création du champ titre
var inputTitre = document.createElement("input");
inputTitre.id = "titre";
inputTitre.type = "text";
inputTitre.placeholder = "Ajouter titre du lien";
inputTitre.required = true;
inputTitre.style.marginLeft = "10px";
//création du champ auteur
var inputAuteur = document.createElement("input");
inputAuteur.id = "auteur";
inputAuteur.type = "text";
inputAuteur.placeholder = "Auteur du lien";
inputAuteur.required = true;
//création du champ url
var inputUrl = document.createElement("input");
inputUrl.id = "url";
inputUrl.type = "text";
inputUrl.placeholder = "Entrer l'URL";
inputUrl.required = true;
inputUrl.style.marginLeft = "10px";
//création du bouton d'ajout formulaire
var bAddlink = document.createElement("input");
bAddlink.type = "submit";
bAddlink.value = "Ajouter";
bAddlink.style.marginLeft = "10px";
//création del'élément form 
var formElt = document.createElement("form");


//contrôle événement sur le submit boutton
formElt.addEventListener("submit", function () {
    var titre = formElt.elements.titre.value;
    var auteur = formElt.elements.auteur.value;
    var url = formElt.elements.url.value;
    var regex = /http:\/\/|https:\/\//;
    if (!regex.test(url)) {
        url = "http://" + url;
    }
    listeLiens.unshift({
        titre: titre,
        url: url,
        auteur: auteur
    });
    divElt.innerHTML = "";
    contenu.innerHTML = "";
    var divNotif = document.createElement("div");
    divNotif.id = "message";
    divNotif.textContent = "Le lien \"" + titre + "\" à bien été ajouté.";
    divNotif.style.backgroundColor = "#ccf2ff";
    divNotif.style.padding = "20px";
    divNotif.style.marginBottom = "5px";
    contenu.insertAdjacentElement("beforebegin", divNotif);
    afficheContenu();
    setTimeout(function(){
        divNotif.parentNode.removeChild(divNotif);
    },2000)
})

//création évenement lors du click sur le boutton
buttonElt.addEventListener("click",function(){
    //console.log("it works!");
    divElt.innerHTML ="";
    formElt.appendChild(inputAuteur);
    formElt.appendChild(inputTitre);
    formElt.appendChild(inputUrl);
    formElt.appendChild(bAddlink);
    divElt.appendChild(formElt);
})

