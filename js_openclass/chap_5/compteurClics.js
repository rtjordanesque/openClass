
var compteClic = 0;
var boutonElt = document.getElementById("clic");
 function clics(){
     compteClic++;
     document.getElementById("compteurClics").textContent = compteClic;
 }
 boutonElt.addEventListener("click", clics);
 document.getElementById("desactiver").addEventListener("click", function(){
     document.getElementById("clic").removeEventListener("click", clics);
 });