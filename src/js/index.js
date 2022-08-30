const enviar = document.getElementById('enviar');

const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');
const textAreaMensagem = document.getElementById('mensagem');

const erroNome = document.querySelector('.erro-nome');
const erroEmail = document.querySelector('.erro-email');
const erroTelefone = document.querySelector('.erro-telefone');
const erroMensagem = document.querySelector('.erro-mensagem');

enviar.addEventListener('click', event => {
  if (inputNome.value === '' || inputNome.value === ' ') {
    inputNome.style.border = '2px solid #f52e2e';
    erroNome.classList.add('visivel');
    event.preventDefault();
  } else {
    inputNome.style.border = '2px solid #00c22b';
    erroNome.classList.remove('visivel');
  }

  if (inputEmail.value === '' || inputEmail.value === ' ') {
    inputEmail.style.border = '2px solid #f52e2e';
    erroEmail.classList.add('visivel');
    event.preventDefault();
  } else {
    inputEmail.style.border = '2px solid #00c22b';
    erroEmail.classList.remove('visivel');
  }

  if (inputTelefone.value === '' || inputTelefone.value === ' ') {
    inputTelefone.style.border = '2px solid #f52e2e';
    erroTelefone.classList.add('visivel');
    event.preventDefault();
  } else {
    inputTelefone.style.border = '2px solid #00c22b';
    erroTelefone.classList.remove('visivel');
  }

  if (textAreaMensagem.value === '' || textAreaMensagem.value === ' ') {
    textAreaMensagem.style.border = '2px solid #f52e2e';
    erroMensagem.classList.add('visivel');
    event.preventDefault();
  } else {
    textAreaMensagem.style.border = '2px solid #00c22b';
    erroMensagem.classList.remove('visivel');
  }
});
