const back = document.querySelector('.back');
const voteNow = document.querySelector('.btn-vote')
// const btn2=document.querySelector(".btn1")


// btn2.addEventListener("click",()=>{
//     window.location.href="/html/musharax2.html"
// }
// )

back.addEventListener('click',()=>{
    console.log('hello');
    
     
    window.location.href='home.html'
    
})
voteNow.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('helooo');
    
    window.location.href='form.html'  
})