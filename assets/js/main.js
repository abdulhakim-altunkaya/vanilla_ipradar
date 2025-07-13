
  const latitude = 40.7128;  // Example: New York
  const longitude = -74.0060;

  const map = L.map('map').setView([latitude, longitude], 9);

  // Add tile layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  // Create custom FontAwesome marker
  const customIcon = L.divIcon({
    className: 'custom-div-icon',
    html: '<i class="fas fa-map-marker-alt" style="color: red; font-size: 32px;"></i>',
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  });

  // Add marker
  const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

