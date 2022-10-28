function mandar() {

    let email = document.getElementById("floatingInput");

    if (email.value == "") {
        alert("Digite seu email!");
    } else {
        alert("Email de recuperação enviado")
    }
}
function validaemail(){
    let email= document.getElementById("floatingInput").value;

if ((!email.includes("@")) && (!email.includes(".com"))) {
    alert('Email invalido.');
}}
