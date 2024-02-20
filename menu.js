// Função para atualizar a cor do menu com base na posição de rolagem
function updateMenuColor() {
    const menu = document.querySelector(".menu");
  
    if (window.scrollY > 0) {
      menu.classList.add("scrolled");
    } else {
      menu.classList.remove("scrolled");
    }
  }
  
  // Atualize a cor do menu quando a página for rolada
  window.addEventListener("scroll", updateMenuColor);