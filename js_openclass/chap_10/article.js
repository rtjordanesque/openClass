var form = document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    var data = new FormData(form);
})
