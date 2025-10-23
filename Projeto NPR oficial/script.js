const list = document.getElementById("carousel-list");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const totalSlides = dots.length;
let intervalId;

// Função para ir para um slide específico
function goToSlide(index) {
  list.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentIndex = index;
}

// Evento para clique manual nos pontinhos
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-index"));
    goToSlide(index);
    resetInterval(); // Reinicia o tempo quando o usuário interage
  });
});

// Troca automática de slides
function startAutoSlide() {
  intervalId = setInterval(() => {
    let nextIndex = (currentIndex + 1) % totalSlides;
    goToSlide(nextIndex);
  }, 3000); // 3 segundos
}

function resetInterval() {
  clearInterval(intervalId);
  startAutoSlide();
}

// Inicia o carrossel automático
startAutoSlide();
