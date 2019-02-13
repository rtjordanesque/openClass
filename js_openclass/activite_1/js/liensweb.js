/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
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

// TODO : compléter ce fichier pour ajouter les liens à la page web


for(var i = 0; i <listeLiens.length;i++){
    var paragraphe = document.getElementById("contenu").appendChild(document.createElement("p"));
    var lien = document.createElement('a');
    lien.textContent =listeLiens[i].titre;
    lien.href = listeLiens[i].url;
    lien.style.color = "#428bca";
    lien.style.fontWeight = "bold";
    lien.style.textDecoration = "none";
    paragraphe.setAttribute("class","lien");
    paragraphe.appendChild(lien);
    paragraphe.insertAdjacentHTML("beforeend", "<span> "+listeLiens[i].url+" <br> Ajouté par "+listeLiens[i].auteur+"</span>");
}
