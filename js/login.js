const formTitle = document.querySelector('#form-title');
const formBtn = document.querySelector('#form-btn');
const signClick = document.querySelector('#sign-click');
const formDescription = document.querySelector('#form-description');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

let signIn = true;
document.body.addEventListener('click',(e)=>{
    
    if(e.target.id != "sign-click")
        return;
        signIn = !signIn;

        if (!signIn) {

    formTitle.textContent= 'Sign up';
    formBtn.textContent='sign up'
    username.style.display = 'block'
    confirmPassword.style.display = 'block'
    formDescription.innerHTML=`
     already have account ? <a href="#" id="sign-click">Sign in</a>
    ` 
}else{
    formTitle.textContent= 'Sign in';
    formBtn.textContent='sign in'
    username.style.display = 'none'
    confirmPassword.style.display = 'none'
    username.value=''
    confirmPassword.value=''
    formDescription.innerHTML=`
     i don't have account ? <a href="#" id="sign-click">Sign up</a>
    ` 

}
    
        
    
       
        //  return;
    
     
        
   

    
    

})




