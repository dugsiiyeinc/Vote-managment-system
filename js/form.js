const submitBtn = document.querySelector('#btn-submit');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const candidate = document.querySelector('#Candidate');
const submiteModel = document.querySelector('.submiteModel');
const submittedCandidate = document.querySelector('#submittedCandidate');
const submittedPhone = document.querySelector('#submittedPhone');
const submittedName = document.querySelector('#submittedName');
const submittedEmail = document.querySelector('#submittedEmail');
const update = document.querySelector('#updatebtn')
const addList = document.querySelector('#delete')


submitBtn.addEventListener('click', addform)
//     e.preventDefault()

//     if (userName.value.trim()   === '') {

//         alert('please fill the form')
//         return
//     } 
//     else if(phone.value.trim() === ''){
//         alert('please fill the form')
//         return
//     }else if(candidate.value === ''){
//         alert('please fill the form')
//         return
//     }else if(email.value.trim()  === ''){
//         alert('please fill the form')
//         return
//     }
    
    
//     submiteModel.style.display = 'block'
//     submittedEmail.textContent=email.value;
//     submittedName.textContent=userName.value
//     submittedPhone.textContent=phone.value
//     submittedCandidate.textContent=candidate.value

//     email.value=''
//     userName.value=''
//     phone.value=''
//     candidate.value=''

//     submitBtn.textContent='Submit'

  
    

function addform(e){
    e.preventDefault()

if (userName.value.trim()   === '') {

    alert('please fill the form')
    return
} 
else if(phone.value.trim() === ''){
    alert('please fill the form')
    return
}else if(candidate.value === ''){
    alert('please fill the form')
    return
}else if(email.value.trim()  === ''){
    alert('please fill the form')
    return
}


submiteModel.style.display = 'block'
submittedEmail.textContent=email.value;
submittedName.textContent=userName.value
submittedPhone.textContent=phone.value
submittedCandidate.textContent=candidate.value

email.value=''
userName.value=''
phone.value=''
candidate.value=''

submitBtn.textContent='Submit'



}





















update.addEventListener('click',()=>{
    email.value=submittedEmail.textContent;
    userName.value=submittedName.textContent
    phone.value=submittedPhone.textContent
    candidate.value=submittedCandidate.textContent

    submitBtn.textContent='update'
    
})

addList.addEventListener('click',()=>{ 
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];

    if (!currentUser || !currentUser.email) {
        alert("Please sign in to vote.");
        return;
    }

    const vote = {
        email1: submittedEmail.textContent,
        username1:submittedName.textContent,
        phone1:submittedPhone.textContent,
        candidate1:submittedCandidate.textContent,
        user:currentUser.email
    }

    const userVote = JSON.parse(localStorage.getItem('votes')) || [];
    const findUser = userVote.find((usr) => usr.email1 ===  submittedEmail.textContent)
    userVote.push(vote)


   
    
    // const findCU = currentUser.email !==  vote.user
    
    if (findUser ) {
      alert(`this user ${submittedEmail.textContent} already voted `);
        return
    }
    if (currentUser.email !== vote.user) {
        alert("You can only vote with the signed-in account.");
        return;
    }
        
    localStorage.setItem('votes', JSON.stringify(userVote))
    submiteModel.style.display = 'none'
    alert('your have successfully registered')
    window.location.href='list.html'
    

    
})


// function addListShow(){
//     const listup = document.createElement('div')
//     listup.classList='.submitted-data'
//     listup.innerHTML=`
//     <!-- <p id="warning">note! if you add the list you don't able to edit  </p>
//         <h1>Submitted Data</h1>
//         <table>
//             <thead>
//                 <tr>
//                     <th>Email</th>
//                     <th>Name</th>
//                     <th>Phone</th>
//                     <th>Candidate</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td id="submittedEmail">${submittedEmail.textContent=email.value}</td>
//                     <td id="submittedName">${submittedName.textContent=userName.value}</td>
//                     <td id="submittedPhone">${submittedPhone.textContent=phone.value}</td>
//                     <td id="submittedCandidate">${submittedCandidate.textContent=candidate.value}</td>
//                 </tr>
//             </tbody>
//         </table>

      
//         <div class="button-container">
//             <button class="btn1" id="updatebtn" >Update</button>
//             <button class="btn1"  id="delete">Add to The List</button>
//         </div> -->
//     `
// }