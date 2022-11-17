let user = ["Rejala", "Caua", "DesWeb"];
let email = ["victorrejala@gmail.com", "cauarogerio@gmail.com", "nifvc@cairu.br"];
let password = ["admin", "admin", "cairu2022"];

function checkLogin (emailCheck, passwordCheck) {   
    if(passwordCheck == password[email.indexOf(emailCheck)]) {
        localStorage.setItem("user", user[email.indexOf(emailCheck)]);
        return true;
    }
    return false
}

function createAccountFunction (newUser, newEmail, newPassword) {

    if(checkNewAccount(newEmail)){
        user.push(newUser);
        email.push(newEmail);
        password.push(newPassword);
        changeBox();
    } 
    alertCreate.innerHTML = "Usuario ja cadastrado";
};

function checkNewAccount (emailCheck) {
    if(email.includes(emailCheck)){
       return false;
    } 
    return true;
}