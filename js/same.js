const userDiv = document.querySelector(".user");
const loginSection = document.getElementById("login");

userDiv.addEventListener("click", () => {
    loginSection.style.display = "flex";
});

const closeBtn = document.querySelector(".close_btn");
closeBtn.addEventListener("click", () => {
    loginSection.style.display = "none";
});

window.onload = init;