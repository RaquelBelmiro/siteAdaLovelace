
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function validaFormulario() {
  var nome = document.getElementById("nome").value
  var email = document.getElementById("email").value
  var telefone = document.getElementById("telefone").value


  if (nome!="" && email!="" && telefone!="") {
    alert("Prontinho " +nome+ "! você receberá as novidades por email")
  } else {
    alert(nome +",bem vinda")
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}
