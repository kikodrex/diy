const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");
let index = 0;

function showImage(i) {
  index = (i + images.length) % images.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => showImage(index + 1));
document.querySelector(".prev").addEventListener("click", () => showImage(index - 1));

// Auto-slide every 5 seconds
setInterval(() => showImage(index + 1), 5000);
