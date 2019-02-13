var mdp1 = document.getElementById("mdp1");
var mdp2 = document.getElementById("mdp2");
var infomdp = document.getElementById("infoMdp");

mdp1.addEventListener("input", function(e){
    var mdp = e.target.value;
    var message = "";
    var regexmdp = /[0-9]/;
    if(mdp.length < 6) {
        message = "Erreur : le nbr de caractères moins de 6";
        infomdp.style.color = "red";
    }
    if(regexmdp.test(mdp)=== false) message += " et ajouter un chiffre au mot de passe";
    infomdp.textContent = message;
})

mdp2.addEventListener("input", function(e){
    var mdpSecond = e.target.value;
    var mdp = mdp1.value;
    var message = "";
    if(mdp !== mdpSecond){
        message = "Erreur : mot de passe different";
        infomdp.style.color = "red"; 
    }
    infomdp.textContent = message;
})

//correction openclassroom
/*
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;
    var message = "Mots de passe OK";
    if (mdp1 === mdp2) {
        if (mdp1.length >= 6) {
            var regexMdp = /\d+/;
            if (!regexMdp.test(mdp1)) {
                message = "Erreur : le mot de passe ne contient aucun chiffre";
            }
        } else {
            message = "Erreur : la longueur minimale du mot de passe est de 6 caractères";
        }
    } else {
        message = "Erreur : les mots de passe saisis sont différents";
    }
    document.getElementById("infoMdp").textContent = message;
    e.preventDefault();
});
*/