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
    

   

    const vote = {
        email1: submittedEmail.textContent,
        username1:submittedName.textContent,
        phone1:submittedPhone.textContent,
        candidate1:submittedCandidate.textContent,
    }

    const userVote = JSON.parse(localStorage.getItem('votes')) || [];
    const findUser = userVote.find((usr) => usr.email1 ===  submittedEmail.textContent)
    userVote.push(vote)


   
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    
    
    
    if (findUser ) {
      alert(`this user ${submittedEmail.textContent} already voted `);
        return
    }

    if (currentUser.email !== submittedEmail.textContent) {
        alert(`this user ${submittedEmail.textContent} is not active`)
        return 
    }

    
    
    localStorage.setItem('votes', JSON.stringify(userVote))
    submiteModel.style.display = 'none'
    alert('your have successfully voted')
    window.location.href='list.html'
    

    
})


