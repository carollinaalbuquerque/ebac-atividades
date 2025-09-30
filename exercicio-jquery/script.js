$(document).ready(function () {
  // Ao enviar o formulário
$("#form-tarefa").on("submit", function (e) {
    e.preventDefault(); // impede o reload da página

    // pega o valor digitado
    const tarefa = $("#tarefa").val().trim();

    if (tarefa !== "") {
      // adiciona na lista
    $("#lista-tarefas").append(`<li>${tarefa}</li>`);
      $("#tarefa").val(""); // limpa o campo
    }
});

  // Ao clicar em um item da lista, alterna a classe "concluida"
$("#lista-tarefas").on("click", "li", function () {
    $(this).toggleClass("concluida");
});
});
