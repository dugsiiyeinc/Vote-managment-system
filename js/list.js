
const userName2 = document.querySelector('#name');
const email2 = document.querySelector('#email');
const phone2= document.querySelector('#phone');
const candidate2= document.querySelector('#Candidate');
const submiteModelll = document.querySelector('.submiteModell-form');
const submittedDatal = document.querySelector('.submitted-data-form');
const submittedCandidatel = document.querySelector('#submittedCandidate');
const submittedPhonel = document.querySelector('#submittedPhone');
const submittedNamel = document.querySelector('#submittedName');
const submittedEmaill = document.querySelector('#submittedEmail');


document.addEventListener('DOMContentLoaded',()=>{
    const showVote = JSON.parse(localStorage.getItem('votes')) || [];
 
    showVote.forEach(element => {

        const voteEntry = document.createElement('tr');
        voteEntry.classList.add('submitted-data-form');
        voteEntry.innerHTML = `
         <table>
            <td >${element.email1}</td>
            <td>${element.username1}</td>
            <td>${element.phone1}</td>
            <td>${element.candidate1}</td>
           
            </table>
        `;
        submittedDatal.appendChild(voteEntry);
    });
});






