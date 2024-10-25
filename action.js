const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const btn1=document.querySelector(".btn")
const btn2=document.querySelector(".btn1")
const btn3=document.querySelector(".btn2")


btn1.addEventListener("click",()=>{
    window.location.href="cadinate/musharax1.html"
}
)


btn2.addEventListener("click",()=>{
    window.location.href="cadinate2/musharax2.html"
}
)

btn3.addEventListener("click",()=>{
    window.location.href="cadinate3/musharax3.html"
}
)




const sigin=document.querySelector(".Sign")
sigin.addEventListener("click",()=>{
    window.location.href="login.html"
})