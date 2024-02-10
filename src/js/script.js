// Função para exibir uma mensagem
function showMessage() {
    alert('Olá! Este é um exemplo de arquivo JavaScript.');
  }
  
  // Adicionando um ouvinte de eventos a um botão
  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('myButton');
    button.addEventListener('click', showMessage);
  });