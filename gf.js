const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// YES → happy ending
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});

// NO → runs away on hover
noBtn.addEventListener("mouseover", moveNoButton);

// If somehow clicked → black void
noBtn.addEventListener("click", () => {
  window.location.href = "no.html";
});

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}
