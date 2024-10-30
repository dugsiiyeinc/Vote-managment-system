const back = document.querySelector('.back');
const voteNow = document.querySelector('.btn-vote')

back.addEventListener('click',()=>{
    
     
    window.location.href='../index.html'
    
})
voteNow.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('helooo');
    
    window.location.href='form.html'  
})