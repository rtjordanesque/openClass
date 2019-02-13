// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

for(var i = 0; i < journaux.length; i++){
    var link = document.createElement("a");
    link.textContent = journaux[i];
    link.href = journaux[i];
    document.getElementById("contenu").appendChild(link);
    document.getElementById("contenu").appendChild(document.createElement("br"));
}