const back = document.querySelector(".back");
const voteNow = document.querySelector(".btn-vote");
// const btn3=document.querySelector(".btn2")

// btn3.addEventListener("click",()=>{
//   window.location.href="/html/musharax3.html"
// }
// )

back.addEventListener("click", () => {
 window.location.href='home.html'
});
voteNow.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("helooo");

  window.location.href = "form.html";
});
