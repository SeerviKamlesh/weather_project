function check() {
    let cityname = document.getElementById('place').value
    let apikey = "3a8104b09945a3a6232f09bb4446165a"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
    let name = document.getElementById('name')
    let temperature = document.getElementById('temperature')
    let flow = document.getElementById('flow')
    let fog = document.getElementById('humiditiy')
    let pressure = document.getElementById('pressure')
    let long = document.getElementById('long')
    let lat = document.getElementById('lat')
   
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            name.innerHTML = data.name
            temperature.innerHTML = Math.floor(data.main.temp - 273) + '°C'
            flow.innerHTML = data.wind.speed + 'km\h'
            fog.innerHTML = data.main.humidity + '%'
            pressure.innerHTML = data.main.pressure + 'p'
            long.innerHTML = data.coord.lon + 'Deg'
            lat.innerHTML = data.coord.lat + 'Deg'
           

        });


}