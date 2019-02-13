// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

for(var i = 0;i < questions.length;i++){
    //creation de question
    var question = document.createElement("strong");
    question.textContent = "Question "+ (i + 1)+": ";

    //creation de i
    var enonce = document.createElement("i");
    enonce.textContent = questions[i].enonce;

    //creation de div
    var div = document.createElement("div");
    div.appendChild(question);
    div.appendChild(enonce);

    //creation du bouton
    var bouton = document.createElement("button");
    bouton.textContent = "Afficher réponse";

    //ajout réponse
    var reponseTab = document.createElement("div");
    reponseTab.appendChild(bouton);

    //ajout du listener 
    bouton.addEventListener("click", function(){
        var reponseElt = document.createElement("div");
        reponseElt.textContent = questions[1].reponse;//erreur boucle pour listener
        reponseTab.innerHTML = "";
        reponseTab.appendChild(reponseElt);      
   })

   //créer l'element paragragphe globale
   var para = document.createElement("p");
   para.appendChild(div);
   para.appendChild(reponseTab);
   document.getElementById("contenu").appendChild(para);
}