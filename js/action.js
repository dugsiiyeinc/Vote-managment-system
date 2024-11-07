document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbar = document.querySelector('.navbar');
    
    if (toggleButton && navbar) {
        toggleButton.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }

    const btn1 = document.querySelector(".btn");
    const btn2 = document.querySelector(".btn1");
    const btn3 = document.querySelector(".btn2");

    if (btn1) {
        btn1.addEventListener("click", () => {
            window.location.href = "/html/musharax1.html";
        });
    }

    if (btn2) {
        btn2.addEventListener("click", () => {
            window.location.href = "/html/musharax2.html";
        });
    }

    if (btn3) {
        btn3.addEventListener("click", () => {
            window.location.href = "/html/musharax3.html";
        });
    }

    const faqs = [
        {
            question: "1.Eligibility to Vote?",
            answer: "Only registered voters who meet registration requirements are allowed to participate in the election."
        },
        {
            question: "2.One Vote Per Candidate?",
            answer: "Each voter may cast only one vote for each position to ensure fairness and integrity in the election process."
        },
        {
            question: "3.Respectful Campaigning?",
            answer: "All candidates and supporters must engage in respectful and fair campaigning, promoting a positive and inclusive environment for all voters."
        },
    ];

    const accordion = document.querySelector(".accordion");

    if (accordion) {
        faqs.forEach((faq) => {
            const accordionItem = document.createElement("div");
            accordionItem.classList.add("accordion-item");
            accordionItem.innerHTML = `
                <h3 class="question-box">${faq.question}</h3>
                <p class="answer-box" style="display: none">${faq.answer}</p>`;

            const questionBox = accordionItem.querySelector(".question-box");
            const answerBox = accordionItem.querySelector(".answer-box");

            questionBox.addEventListener("click", () => {
                const allAnswers = accordion.querySelectorAll(".answer-box");
                allAnswers.forEach((answer) => {
                    answer.style.display = "none";
                });
                answerBox.style.display = "block";
            });

            accordion.appendChild(accordionItem);
        });
    }

    const logOut = document.querySelector('#logoutbtn');
    if (logOut) {
        logOut.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = '../index.html';
        });
    }

    const profile = document.querySelector('#profile-id');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (profile && currentUser) {
        profile.textContent = currentUser.username;
    } else if (!currentUser) {
        console.error("No current user found in localStorage.");
    }
});
