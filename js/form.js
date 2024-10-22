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


submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    if (userName.value.trim()   === '') {

        alert('please form fill')
        return
    } 
    else if(phone.value.trim() === ''){
        alert('please form fill')
        return
    }else if(candidate.value === ''){
        alert('please form fill')
        return
    }else if(email.value.trim()  === ''){
        alert('please form fill')
        return
    }
    document.body.style.marginTop='10rem'
    submiteModel.style.display = 'block'
    submittedEmail.textContent=email.value;
    submittedName.textContent=userName.value
    submittedPhone.textContent=phone.value
    submittedCandidate.textContent=candidate.value

    
    
})