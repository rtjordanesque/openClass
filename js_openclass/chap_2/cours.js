var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3
// Le contenu HTML de l'élément identifié par "contenu"
//console.log(document.getElementById("contenu").innerHTML);
// Le contenu textuel de l'élément identifié par "contenu"
//console.log(document.getElementById("contenu").textContent);

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"