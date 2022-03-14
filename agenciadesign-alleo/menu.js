let show = true;

const menusection = document.querySelector(".menu-section")
const menutoggle = menusection.querySelector(".menu-toggle")

menutoggle.addEventListener("click", () =>{

    document.body.style.overflow = show ? "hidden" : "initial"

    menusection.classList.toggle("on", show)
    show = !show;
})