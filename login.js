function checkBirthday() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  // 👇 CHANGE THIS TO THE REAL BIRTHDAY
  const correctDay = "15";
  const correctMonth = "8";
  const correctYear = "2002";

  if (day === correctDay && month === correctMonth && year === correctYear) {
    window.location.href = "valentine.html";
  } else {
    document.getElementById("error").innerText =
      "Wrong 😤 Try again.";
  }
}
