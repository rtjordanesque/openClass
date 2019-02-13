var form = document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    var data = new FormData(form);
    ajaxPost("https://oc-jswebsrv.herokuapp.com/article",data,function(){
        var message = document.createElement("p");
        message.textContent = "Le contenu à bien été ajouté";
        form.insertAdjacentElement("afterend",message);
    });
})
