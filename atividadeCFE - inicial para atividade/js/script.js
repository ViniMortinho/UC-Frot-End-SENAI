//efeito do botão voltar ao Topo
function topo() {
  if (document.documentElement.scrollTop > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

//tela de login
function Login() {
  var email = document.getElementById("usuario").value; 
  var senha = document.getElementById("senha").value;

  if (email === 'admin' && senha === '123456') {
    // Redirecionar para página de sucesso de login (index.html, por exemplo)
    window.location.href = "index.html";
  } else {
    // Autenticar com Firebase
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function() {
        // Redirecionar para página de sucesso de login (index.html, por exemplo)
        window.location.href = "index.html";
      })
      .catch(function(error) {
        var errorMessage = error.message;
        alert("Acesso negado. Corrija seus dados. Erro: " + errorMessage);
      });
  }
}



//Ativar alert no botão cadastrar

function cadastro() {
    alert("cadastrado com sucesso");
    window.location.href = "index.html";
}
