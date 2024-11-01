
const userName2 = document.querySelector('#name');
const email2 = document.querySelector('#email');
const phone2= document.querySelector('#phone');
const candidate2= document.querySelector('#Candidate');
const submiteModell = document.querySelector('.submiteModell');
const submittedCandidatel = document.querySelector('#submittedCandidate');
const submittedPhonel = document.querySelector('#submittedPhone');
const submittedNamel = document.querySelector('#submittedName');
const submittedEmaill = document.querySelector('#submittedEmail');


document.addEventListener('DOMContentLoaded',()=>{
    const showVote = JSON.parse(localStorage.getItem('votes')) || [];
    // showVote.push(v)

     showVote.forEach(element => {
        console.log(element);
        
        submittedEmail.textContent=element.email1;
        submittedName.textContent=element.username1
        submittedPhone.textContent=element.phone1
        submittedCandidate.textContent=element.candidate1
       
        
     });

       
       
       
    
       
        
        
           
         

        
        
        
    });



// function addformlist(element){

//     const showVote = JSON.parse(localStorage.getItem('votes')) || [];
//     showVote.forEach (element=>{
// console.log(element);

    
    

//     // e.preventDefault()

// // if (userName.value.trim()   === '') {

// //     alert('please fill the form')
// //     return
// // } 
// // else if(phone.value.trim() === ''){
// //     alert('please fill the form')
// //     return
// // }else if(candidate.value === ''){
// //     alert('please fill the form')
// //     return
// // }else if(email.value.trim()  === ''){
// //     alert('please fill the form')
// //     return
// // }


// // submiteModel.style.display = 'block'
// submittedEmail.textContent=element.emaill;
// submittedName.textContent=element.userNamel
// submittedPhone.textContent=element.phonel
// submittedCandidate.textContent=element.candidatel

// // email.value=''
// // userName.value=''
// // phone.value=''
// // candidate.value=''

// // submitBtn.textContent='Submit'

//     })

// }
