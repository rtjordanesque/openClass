// TODO : écrire la fonction compterElements
function compterElements(queryElt){
    console.log(document.querySelectorAll(queryElt).length);
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2