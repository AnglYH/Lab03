const infoBtn = document.querySelector(".info-btn");

infoBtn.addEventListener("click", function() {
  const lista = document.querySelector(".list");
  const elementos = lista.getElementsByTagName("li");
  let texto = "";

  for (let i = 0; i < elementos.length; i++) {
    const valor = elementos[i].textContent; 
    texto += valor + "\n"; 
  }

  alert(texto);
});