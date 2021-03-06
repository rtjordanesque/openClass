/* 
Activité 3
*/

//On recupere le div dont l'id est contenu
var contenu = document.getElementById("contenu");

//récuperer la liste des données avec ajaxGet et les afficher

ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function (response) {
    var listeLiens = JSON.parse(response);
    listeLiens.forEach(function (lien) {
        var elementLien = creerElementLien(lien);
        contenu.appendChild(elementLien);
    })
});

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.target ="_blank";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

//Fonction qui cree un champs de saisie input
// Prend en parametre le type, le value par defaut et le name

function creerInput(type,value,name){
    var inputElt=document.createElement("input");
    if (type=="submit") {
        inputElt.value=value;
    }else
    {
        inputElt.setAttribute("placeholder",value);
        inputElt.setAttribute("required",true);
    }

    inputElt.style.marginRight="10px";
    inputElt.setAttribute("type",type);
    inputElt.setAttribute("name",name);

    return inputElt;
}

// On crée le bouton d'ajout des liens
var boutonElt=creerInput("submit","Ajouter un lien","submit");

// On crée le div qui contiendra le bouton, le formulaire d'ajout et le message d'insertion
var divElt=document.createElement("div");
divElt.style.marginBottom="20px";
divElt.appendChild(boutonElt);
divElt.appendChild(document.createElement("br"));

//on insert le div dans body juste avant le div du contenu
document.body.insertBefore(divElt,contenu);

//Lorqu'on clic sur ajout lien
boutonElt.addEventListener("click",function(e){
    var inputNom=creerInput("text","Entrez votre nom","nom");
    var inputTitre=creerInput("text","Entrer le titre du lien","titre");
    var inputUrl=creerInput("text","Entrer l'url du lien","url");
    var inputAjout=creerInput("submit","Ajouter","submit");
    var formElt=document.createElement("form");
    // L'insertion de nouvel lien dans le div de contenu
    formElt.addEventListener("submit",function(e){
        var lienCorect=inputUrl.value;
        var lienObjet={};
        var regex=/^https?:\/\/\w+/;
        if (regex.test(inputUrl.value)!=true) {
            lienCorect="http://"+inputUrl.value;
        }
        lienObjet.titre=inputTitre.value;
        lienObjet.url=lienCorect;
        lienObjet.auteur=inputNom.value;

        //on envoi les données vers l'API
        ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien",lienObjet,function(reponse){},true);

        var newLien=creerElementLien(lienObjet);
        contenu.insertBefore(newLien,document.querySelector("#contenu div"));

        divElt.innerHTML=" ";
        
        //création du message de confirmation
        var msg=document.createElement("div");
        msg.style.background="#ccf2ff";
        msg.style.padding="20px";
        msg.style.marginBottom="30px";
        msg.textContent='Le lien "'+lienObjet.titre+'" a bien ete ajouté';
        divElt.appendChild(msg);
        divElt.appendChild(boutonElt);
     
        
        //On enleve le message aprés deux seconde
        setTimeout(function(){
            divElt.innerHTML=" ";
            divElt.appendChild(boutonElt);
        },2000);

        e.preventDefault();
    });

    divElt.innerHTML=" ";
    formElt.appendChild(inputNom);
    formElt.appendChild(inputTitre);
    formElt.appendChild(inputUrl);
    formElt.appendChild(inputAjout);
    divElt.appendChild(formElt);
});