
/*
Exercice : tableau de tableaux
*/

ajaxGet("http://127.0.0.1:8080/edsa-javascriptoc/tableaux.json", function (reponse) {
    var tableaux = JSON.parse(reponse);
    var tableauxElt = document.getElementById("tableaux");
    tableaux.forEach(function (tableau) {
        // Crée une ligne de tableau HTML pour chaque tableau
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.nom + "</td>" + "<td>" + tableau.annee + "</td>" +
            "<td>" + tableau.auteur + "</td>";
        tableauxElt.appendChild(ligneElt);
    });
});