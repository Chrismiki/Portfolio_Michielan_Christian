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




