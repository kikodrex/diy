function openModal(qrImage, product) {
  document.getElementById("qrImage").src = qrImage;
  document.getElementById("orderModal").style.display = "block";
}
function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

// Countdown Timer
let countDownDate = new Date().getTime() + 2 * 24 * 60 * 60 * 1000; // 2 days
let timer = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Promo ended";
    return;
  }
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);
