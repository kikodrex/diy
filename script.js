function openModal(qrCode) {
  document.getElementById("qrImage").src = qrCode;
  document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

const countdownDate = new Date().getTime() + 86400000;
const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = `${hrs}h ${mins}m ${secs}s`;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
