
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


/*

async function logVisitor() {
  
  const ipInput = document.querySelector('.inputIP').value.trim();
  if (!ipInput) {
    document.querySelector('.resultArea').innerHTML = 'Please enter a valid IP address.';
    return;
  }

  try {
    const response = await axios.post(`https://www.eumaps.org/api/save-visitor/ipradar/${ipInput}`);
    console.log('Visitor logged:', response.data.resData);
  } catch (error) {
    if (error.response) {
      console.error('Server responded with error:', error.response.data);
    } else {
      console.error('Request failed:', error.message);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('logVisitorBtn');
  if (button) {
    button.addEventListener('click', logVisitor);
  }
});
*/
async function handleGeolocation() {
    const ipInputValue = document.getElementById('ipInput').value.trim();
    if (!ipInputValue) {
        console.log("Please enter a valid IP address.");
        return;
    }

    try {
      const response = await axios.post("https://www.eumaps.org/api/get-coordinates-and-log-visitor",
        { ipInput: ipInputValue });

      const geoData = response.data.resData;

      document.getElementById('continentSpan').textContent = geoData.continent_name;
      document.getElementById('countrySpan').textContent = geoData.country_name;
      document.getElementById('citySpan').textContent = geoData.city;
      document.getElementById('latitudeSpan').textContent = geoData.latitude;
      document.getElementById('longitudeSpan').textContent = geoData.longitude;
      document.getElementById('connectionTypeSpan').textContent =  geoData.connection_type;
      document.getElementById('ipTypeSpan').textContent = geoData.type;

    } catch (error) {
        console.error("Error fetching geolocation data:", error.message);
    }
}
document.getElementById('logVisitorBtn').addEventListener('click', handleGeolocation);