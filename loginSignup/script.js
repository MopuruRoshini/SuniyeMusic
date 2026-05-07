const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

RegisterLink.addEventListener('click', () =>{
    container.classList.add('active');
})

LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
})
// LOGIN BUTTON
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

    const username = document.getElementById("username").value;

    // save username
    localStorage.setItem("username", username);

    // open app
    window.location.href = "/app/index.html";
});