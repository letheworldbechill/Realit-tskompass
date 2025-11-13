// Save ritual step
function saveStep(step) {
  const data = JSON.parse(localStorage.getItem("ritual") || "{}");
  data[step] = new Date().toISOString();
  localStorage.setItem("ritual", JSON.stringify(data));
  alert("Gespeichert ✔️");
}

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
