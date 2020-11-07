function validate(e) {
    //impedir reloader da página 
    e.preventDefault();
     
    var email = document.getElementById("usuario").value;
    var pass = document.getElementById("senha").value;
    // validação de dados 
    if (email == 'academy@cocreare.com.br' && pass == '123456') { 
        window.location.href = "resultadobuscas.html" 
    } else { 
        alert('Dados incorretos. Por favor, tente novamente!') }
}