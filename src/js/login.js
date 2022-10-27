function enviar(){
    let email = document.getElementById("floatingInput");
    let senha = document.getElementById("floatingPassword");

    if(email.value=="" || senha.value==""){
        alert("Algo está faltando!")
    }else{
        alert("Login realizado com sucesso, você será redirecionado!");
    }

}