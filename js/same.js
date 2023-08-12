//這邊是漢堡
function toggleNav() {
    const navArea = document.querySelector('.nav-area');
    navArea.classList.toggle('open');
}
// 這邊是login
const userDiv = document.querySelector("#user");
const loginSection = document.getElementById("login");
const loginBg = document.querySelector(".login_bg");

userDiv.addEventListener("click", () => {
    loginSection.style.display = "flex";
    loginBg.style.display = "block";
});

const closeBtn = document.querySelector(".close_btn img");
closeBtn.addEventListener("click", () => {
    loginSection.style.display = "none";
    loginBg.style.display = "none";
});

loginBg.addEventListener("click", () => {
    loginSection.style.display = "none";
    loginBg.style.display = "none";
});

