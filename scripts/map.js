document.addEventListener("DOMContentLoaded", () => {
  // Инициализация карты, центрированной на Москве
  const map = L.map("map").setView([55.7558, 37.6173], 11);

  // Добавление тайлов OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // Добавление маркера
  L.marker([55.7558, 37.6173])
    .addTo(map)
    .bindPopup("Москва")
    .openPopup();
});