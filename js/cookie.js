// criar um local storage

localStorage.setItem("cookie-consentimento",true);
localStorage.setItem("verificar",1);
// set define um valor 
// get leio o valor 
console.log(localStorage.getItem("cookie-consentimento"));
console.log(localStorage.length);
localStorage.removeItem("verificar");

document.getElementById("aceitar").addEventListener("click",
    function(){
        localStorage.setItem("usar cookie", true)  
        document.getElementById("cookie").classList.add("d-none")  
    }
);
document.getElementById("rejeitar").addEventListener("click",
    function(){
        localStorage.setItem("usar cookie", false)  
        document.getElementById("cookie").classList.add("d-none")  
    }
);

// verificar se o local storage existe.
if(localStorage.hasOwnProperty("usar-cookie")){
    document.getElementById("cookie").classList.add("d-none");
    if(localStorage.getItem("usar-cookie")==="false"){
     document.getElementById("favorito1").classList.add("d-none")   

    }

}

