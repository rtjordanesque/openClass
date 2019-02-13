var url_api = "https://oc-jswebsrv.herokuapp.com/api/temoignage"; //données JSON (true)
var form = document.querySelector("form");
form.addEventListener("submit",function(e){
    //annuler action formulaire par défaut
    e.preventDefault();
    var data = new FormData(form);//instancier et récuperer les valeurs des formulaires
    console.log(data);
    document.getElementById("resultat").innerHTML = "";
    ajaxPost(url_api,JSON.stringify(data),function(reponse){
        
        document.getElementById("resultat").innerHTML = "Témoignage ajouté.";
    },true)

})

/*
//correction exo
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  var temoignage = {
    pseudo: e.target.elements.pseudo.value,
    evaluation: e.target.elements.evaluation.value,
    message: e.target.elements.message.value
  };
  ajaxPost(
    "https://oc-jswebsrv.herokuapp.com/api/temoignage",
    temoignage,
    function(reponse) {
      var messageElt = document.createElement("p");
      messageElt.textContent = "Témoignage ajouté.";
      document.getElementById("resultat").appendChild(messageElt);
    },
    true
  );
});
 */