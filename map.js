function initMap() {
    const moscow = { lat: 55.7558, lng: 37.6173 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: moscow,
    });
  
    new google.maps.Marker({
      position: moscow,
      map: map,
      title: "Москва",
    });
  }
  window.initMap = initMap;
  
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ8WcH4hm8enXwbU7kVB9yjEhS9rytcQU&callback=initMap";
  script.defer = true;
  document.head.appendChild(script);
  