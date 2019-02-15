//fonction ajax get
function ajaxGet(url,callback){
    var req = new XMLHttpRequest();
    req.open("GET",url);
    req.addEventListener("load", function(){
        if(req.status >= 200 && req.status <= 400) callback(req.responseText);
        else console.error(req.status + " " + req.statusText + " " + url);
    })
    req.addEventListener("error", function(){
        console.error("Erreur réseau aver l'URl: "+url);
    })
    req.send(null);
}
//fonction ajax post 
function ajaxPost(url,data,callback,isJson){
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load",function(){
        if(req.status >= 200 && req.status <= 400) callback(req.responseText);
        else console.error(req.status + " " + req.statusText + " " + url);
    }) 
    req.addEventListener("error", function(){
        console.error("Erreur réseau aver l'URl: "+url);
    })
    if(isJson){ 
        req.setRequestHeader("content-type","application/json")
        data = JSON.stringify(data);
    }
    req.send(data);
}