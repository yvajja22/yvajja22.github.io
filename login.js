function checkBirthday() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  if (day == 15 && month == 8 && year == 2004) {
    window.location.href = "gf.html";
  } else {
    document.getElementById("error").innerText = "Wrong 😤 Try again.";
  }
}
