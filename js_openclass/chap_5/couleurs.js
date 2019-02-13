var code = "";

document.addEventListener("keypress", function(e){
    code = String.fromCharCode(e.charCode);
    var code = code.toLowerCase();
    console.log(code);
    var div = document.getElementsByTagName("div");
    var couleur;
    switch(code){
        case 'r' :
            couleur = "red";
            break;
        case 'j' :
            couleur = "yellow";
            break;
        case 'v' :
            couleur = "green";
            break;
        case 'b' :
            couleur = "blue";
            break;
    }
    for (var i = 0; i < div.length; i++){
        div[i].style.backgroundColor = couleur;
    }
})


