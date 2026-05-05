const socket = io();

socket.on("alert", (data) => {
  document.getElementById("alert").innerText = data.message;
});

fetch("/api/stats")
  .then(res => res.json())
  .then(data => {
    new Chart(document.getElementById("chart"), {
      type: "bar",
      data: {
        labels: ["Success", "Failed"],
        datasets: [{
          label: "Login Attempts",
          data: [data.success, data.failed]
        }]
      }
    });
  });