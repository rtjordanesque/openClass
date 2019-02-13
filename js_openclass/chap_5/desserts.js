document.querySelector("button").addEventListener("click", function(){
    var formDessert = prompt("Votre dessert préférés? : ");
    var liElt = document.createElement("li");
    liElt.textContent = formDessert;
    liElt.addEventListener("click",function(e){
        var modifDessert = prompt("Modifier votre dessert : ", e.target.textContent);
        e.target.textContent = modifDessert;
    })
    document.getElementById("desserts").appendChild(liElt);
})