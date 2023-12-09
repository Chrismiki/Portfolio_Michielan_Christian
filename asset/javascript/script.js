/*Codice javascript per attivare l'hamburgher menu*/
const hamburgher = document.querySelector(".hamburgher");
const boxNavItem = document.querySelector(".box-nav-item");

hamburgher.addEventListener("click", () =>{
    hamburgher.classList.toggle("active");
    boxNavItem.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach (n => n.addEventListener("click", () =>{
        hamburgher .classList.remove("active");
        boxNavItem .classList.remove("active");
    }))
/*Concessione con emailjs per rendere il modulo attivo*/
function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message_id : document.getElementById("message").value
    }
    emailjs.send("service_qfn82if", "template_4vw2atg", params).then(function (res){
        alert("Success! " + res.status);
    })
}

 

    
    
    
    