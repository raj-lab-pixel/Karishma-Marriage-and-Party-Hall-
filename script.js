const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    themeToggle.textContent = "☀️";
  }else{
    themeToggle.textContent = "🌙";
  }
});
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if(e.target !== lightboxImg){
    lightbox.style.display = "none";
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const eventType = document.getElementById("eventType").value;
  const eventDate = document.getElementById("eventDate").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !eventType) {
    alert("Please fill all required fields");
    return;
  }
   
  const whatsappMessage =
    "New Enquiry - Karishma Marriage & Party Hall\n\n" +
    "Name: " + name + "\n" +
    "Phone: " + phone + "\n" +
    "Event Type: " + eventType + "\n" +
    "Event Date: " + eventDate + "\n" +
    "Message: " + message;

  const whatsappURL =
    "https://api.whatsapp.com/send?phone=919026405964&text=" +
    encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank");
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.right = menu.style.right === '0px' ? '-250px' : '0px';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
