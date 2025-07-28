// Timer setup (1 day countdown)
let countdownTime = new Date().getTime() + 24 * 60 * 60 * 1000;

function updateTimer() {
  let now = new Date().getTime();
  let distance = countdownTime - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").textContent =
    ("0" + hours).slice(-2) + ":" +
    ("0" + minutes).slice(-2) + ":" +
    ("0" + seconds).slice(-2);

  if (distance < 0) {
    document.getElementById("timer").textContent = "00:00:00";
  }
}
setInterval(updateTimer, 1000);

// Modal functions
function openModal(product, qrImage) {
  document.getElementById("qrImage").src = "images/" + qrImage;
  document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

function submitOrder(e) {
  e.preventDefault();
  alert("Salamat! Pakihintay ang kumpirmasyon via email.");
  closeModal();
}
