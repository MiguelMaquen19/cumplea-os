// Lista de imágenes de la carpeta (agrega aquí los nombres de tus imágenes)
const images = [
  "BeautyPlus_20230528102854161_save.jpg",
  "BeautyPlus_20230616104749155_save.jpg",
  "BeautyPlus_20230910131918917_save.jpg",
  "BeautyPlus_20240615142206684_save.jpg",
  "BeautyPlus_20240615142329952_save.jpg",
  "BeautyPlus_20240615142453980_save.jpg",
  "BeautyPlus_20240615142528223_save.jpg",
  "IMG_20231218_181627.jpg",
  "IMG-20230320-WA0008.jpg",
  "IMG-20230401-WA0141.jpg",
  "IMG-20230424-WA0043.jpg",
  "IMG-20230424-WA0049.jpg",
  "Snapchat-144464267.jpg",
  "Snapchat-2106926011.jpg",
  "Snapchat-804061593.jpg",
  "WhatsApp Image 2025-03-08 at 9.46.00 AM (1).jpeg",
  "WhatsApp Image 2025-03-08 at 9.46.00 AM.jpeg",
  "WhatsApp Image 2025-03-08 at 9.46.07 AM (1).jpeg",
  "WhatsApp Image 2025-03-08 at 9.46.07 AM.jpeg",
  "WhatsApp Image 2025-03-08 at 9.46.08 AM (1).jpeg",
  "WhatsApp Image 2025-03-08 at 9.46.08 AM (2).jpeg",
  "WhatsApp Image 2025-03-08 at 9.46.08 AM.jpeg",
];

const gallery = document.getElementById("gallery");

images.forEach((img) => {
  const imgElem = document.createElement("img");
  imgElem.src = img;
  imgElem.alt = "Foto de nosotros";
  gallery.appendChild(imgElem);
});

// Animación sencilla de corazones flotando
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 800);

// Animación de lluvia de corazones
function lluviaCorazones() {
  const heart = document.createElement("div");
  heart.className = "rain-heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 2 + "s";
  heart.innerHTML = "❤";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
setInterval(lluviaCorazones, 350);

const mensajes = [
  "Amorcito, te amo mucho, demasiado, infinito. Siempre estaremos juntitos hasta viejitos. Recuerda que a pesar del tiempo siempre te voy a amar.",
  "Nunca me aburriré de ti, eres lo más hermoso que tengo en la vida. Jamás me cansaré de ti, eres lo más bonito que me dio la vida.",
  "Siempre, pero siempre, tengo que agradecer a Dios por conocerte y por ser lo más hermoso que me tocó en la vida.",
  "Sabes que a pesar de mis disgustos, nunca me cansaré de ti, amor. Siempre estaré contigo en las buenas, en las malas y en las peores.",
  "Te amo tanto, amor, que me imagino toda una vida juntos, con Camilito y todo bonito, amor.",
  "Espero que la pases súper en este, tu cumpleaños. 22 años ya, amor, ¡estás vieja! Te amo mucho, amor.",
];

// Mostrar modal al hacer click en una imagen
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");

// Prepara el sonido de gota
const gotaAudio = new Audio("gota.mp3");
gotaAudio.volume = 0.5; // volumen suave

// Asignar evento a cada imagen después de crearlas
Array.from(gallery.children).forEach((imgElem, idx) => {
  imgElem.addEventListener("click", () => {
    const mensaje = mensajes[idx % mensajes.length];
    modalMessage.textContent = mensaje;
    modal.classList.add("active");
    gotaAudio.currentTime = 0;
    gotaAudio.play();
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Cerrar modal al hacer click fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Efecto de escarcha (sparkle) siguiendo el puntero
window.addEventListener("mousemove", function (e) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.clientX - 6 + "px";
  sparkle.style.top = e.clientY - 6 + "px";
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 700);
});
