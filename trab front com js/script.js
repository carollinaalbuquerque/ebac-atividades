const formulario = document.getElementById('formulario');
const notificacao = document.getElementById('notificacao');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const campoA = Number(document.getElementById('campoA').value);
  const campoB = Number(document.getElementById('campoB').value);

  if (campoB > campoA) {
    mostrarNotificacao('Formulário válido: B é maior que A.', 'sucesso');
  } else {
    mostrarNotificacao('Formulário inválido: B deve ser maior que A.', 'erro');
  }
});

// função para exibir notificação
function mostrarNotificacao(mensagem, tipo) {
  notificacao.textContent = mensagem;

  // remove classes anteriores
  notificacao.classList.remove('sucesso', 'erro');

  // adiciona a classe correta
  notificacao.classList.add(tipo);

  // mostra a notificação
  notificacao.style.display = 'block';

  // esconde depois de 3 segundos
  setTimeout(() => {
    notificacao.style.display = 'none';
  }, 3000);
}
