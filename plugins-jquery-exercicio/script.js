$(document).ready(function(){

// 1️⃣ Carousel
let index = 0;
const slides = $(".slide");

function showSlide(i) {
  slides.removeClass("active");
  slides.eq(i).addClass("active");
}

$("#next").click(function() {
  index = (index + 1) % slides.length;
  showSlide(index);
});

$("#prev").click(function() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Automático a cada 3s
setInterval(function(){
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);

// 2️⃣ Máscara telefone
$("input[name='telefone']").mask("(00) 00000-0000");

// 3️⃣ Validação simples
$("#formulario").on("submit", function(e){
  e.preventDefault();
  let nome = $("input[name='nome']").val().trim();
  let telefone = $("input[name='telefone']").val().trim();
  let email = $("input[name='email']").val().trim();

  if(nome === "" || telefone === "" || email === "") {
    alert("Por favor, preencha todos os campos!");
  } else {
    alert("Formulário enviado com sucesso!");
    $(this)[0].reset(); // limpa o form
  }
});

});
