document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([55.7558, 37.6173], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  L.marker([55.7558, 37.6173])
    .addTo(map)
    .bindPopup("Москва")
    .openPopup();
});