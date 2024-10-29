const back = document.querySelector('.back');
const voteNow = document.querySelector('.btn-vote')

back.addEventListener('click',()=>{
    console.log('hello');
    
     
    window.location.href='home.html'
    
})
voteNow.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('helooo');
    
    window.location.href='form.html'  
})