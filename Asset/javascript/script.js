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



    


    
    (function() {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init('7UzpYsMgQ678ID88a');
    })();


    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // these IDs from the previous steps
            emailjs.sendForm('contact_service', 'contact_form', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }