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

const mensajes = [
  "Eres la razón de mi sonrisa cada día. ¡Feliz cumpleaños, amor! 💖",
  "Gracias por existir y por todos los momentos hermosos juntos. 💜",
  "Cada foto es un recuerdo de lo mucho que te amo. ¡Feliz 22! 🥰",
  "Eres mi persona favorita en el mundo. ¡Te amo infinitamente! 💗",
  "Contigo, cada día es especial. ¡Feliz cumpleaños, mi vida! 🎂",
  "Eres mi sueño hecho realidad. ¡Feliz 22 años, princesa! 👑",
  "Gracias por ser mi compañera, mi amiga y mi amor. 💞",
  "No hay nada más bonito que verte sonreír. ¡Feliz cumpleaños! 😊",
  "Por muchos años más juntos, mi amor. ¡Te adoro! 💕",
  "Eres mi inspiración y mi alegría. ¡Feliz cumpleaños! 🌸",
  "Siempre serás mi gran amor. ¡Feliz 22! 💍",
  "Cada momento contigo es un tesoro. ¡Te amo! 💝",
  "Eres la mejor parte de mi vida. ¡Feliz cumpleaños! 🌷",
  "Gracias por tu amor y tu dulzura. ¡Feliz día, mi reina! 👸",
  "Hoy celebramos tu vida y nuestro amor. ¡Feliz cumpleaños! 🎉",
  "Eres mi todo. ¡Feliz 22 años, amorcito! 💓",
  "Que todos tus sueños se hagan realidad. ¡Te amo! ✨",
  "Siempre juntos, siempre felices. ¡Feliz cumpleaños! 🫶",
  "Eres mi sol y mi luna. ¡Feliz cumpleaños, mi amor! 🌙☀️",
  "Por siempre a tu lado. ¡Feliz 22! 💞",
];

// Mostrar modal al hacer click en una imagen
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");

// Asignar evento a cada imagen después de crearlas
Array.from(gallery.children).forEach((imgElem, idx) => {
  imgElem.addEventListener("click", () => {
    const mensaje = mensajes[idx % mensajes.length];
    modalMessage.textContent = mensaje;
    modal.classList.add("active");
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
