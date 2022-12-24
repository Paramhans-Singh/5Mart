const bar = document.querySelector("#bar");
const navbarEl = document.querySelector(".navbar")
const closeEl = document.querySelector("#closebtn")

bar.addEventListener('click',()=>{
    navbarEl.classList.add('activebar')
})
closeEl.addEventListener('click',()=>{
    navbarEl.classList.remove('activebar')
})