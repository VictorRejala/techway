const btnLogin = document.querySelector("#loginSubmit");
const btnCreate = document.querySelector("#createAccount");
const formLogin = document.querySelector(".formLoginBox");
const formCreateAccount = document.querySelector(".formCreateAccountBox");
const alertLogin = document.querySelector(".alert");
const alertCreate = document.querySelector(".alertCreate");

function changeBox () {

    formLogin.classList.toggle("invisible");
    formLogin.reset();
    alertLogin.innerHTML = " ";
    formCreateAccount.classList.toggle("invisible");
    formCreateAccount.reset();
    alertCreate.innerHTML = " ";
}

btnLogin.addEventListener("click", ()=> {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if(checkLogin(email, password)) {
        window.location.href="home.html";
    } else {
        alertLogin.innerHTML = "Usuario ou senha incorreta"
    }
    formLogin.reset();
})

btnCreate.addEventListener("click", ()=>{
    event.preventDefault();
    let newUser = document.querySelector("#newUser").value;
    let newEmail = document.querySelector("#newEmail").value;
    let newPassword = document.querySelector("#newPassword").value;
    createAccountFunction(newUser, newEmail, newPassword);
})