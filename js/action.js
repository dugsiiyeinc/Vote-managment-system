const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');

const profile = document.querySelector('#profile-id');
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUser);

profile.textContent = currentUser.username

document.querySelector('#logoutbtn').addEventListener('click',function(){

    localStorage.removeItem('currentUser');
    window.location.href = '../index.html'
    })

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});



const btn1=document.querySelector(".btn")
const btn2=document.querySelector(".btn1")
const btn3=document.querySelector(".btn2")


btn1.addEventListener("click",()=>{
    window.location.href="/html/musharax1.html"
}
)


btn2.addEventListener("click",()=>{
    window.location.href="/html/musharax2.html"
}
)

btn3.addEventListener("click",()=>{
    window.location.href="/html/musharax3.html"
}
)



const faqs=[
    {
        question:"1.Eligibility to Vote?",
        answer:"Only registered voters who meet registration requirements are allowed to participate in the election."
    },
    {
        question:"2.One Vote Per Candidate?",
        answer:"Each voter may cast only one vote for each position to ensure fairness and integrity in the election process."
    },{
        question:"3.Respectful Campaigning?",
        answer:"All candidates and supporters must engage in respectful and fair campaigning, promoting a positive and inclusive environment for all voters."
    },
]

const accordion=document.querySelector(".accordion")

faqs.map((faq)=>{
    const accordionItem=document.createElement("div")
    accordionItem.classList.add("accordion-item")
    accordionItem.innerHTML=`
    <h3 class="question-box">${faq.question}</h3>
    <p class="answer-box" style="display:none">${faq.answer}</p>    `;

    const accordionContact=accordionItem.querySelector(".question-box")
    accordionItem.querySelector(".answer-box").style.display="block"
    accordionContact.addEventListener("click",()=>{
        const accordionContacts=document.querySelectorAll(".answer-box")
       accordionContacts.forEach(accordion=>{
        accordion.style.display="none"
       })
     accordionItem.querySelector('.answer-box').style.display="block"
    })
    accordion.appendChild(accordionItem)
})





   