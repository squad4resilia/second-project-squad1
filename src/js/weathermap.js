function weathermap(x) {
  const lat = document.getElementById(`z${x}`).innerText;
  const lng = document.getElementById(`y${x}`).innerText;
  const apiKey = "0f03a8baaa841fa5983e816afeef5877";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;
  const boxes = Array.from(document.getElementsByClassName('xii'));
  boxes.forEach(box => {
    box.style.display = 'none';
  })
  console.log(url)
  $.ajax({
    url: `${url}`,
    success: function (result) {
      console.log(result);
      let min = Math.round(result.main.temp_min);
      let max = Math.round(result.main.temp_max);
      let atual = Math.round(result.main.temp);
      var clima = result.weather[0].description;
      switch (clima) {
        case "clear sky":
          clima = "https://openweathermap.org/img/wn/01d.png"
          break;
        case "few clouds":
          clima = "https://openweathermap.org/img/wn/02d.png"
          break;
        case "scattered clouds":
          clima = "https://openweathermap.org/img/wn/03d.png"
          break;
        case "broken clouds":
          clima = "https://openweathermap.org/img/wn/04d.png"
          break;
        case "shower rain":
          clima = "https://openweathermap.org/img/wn/09d.png"
          break;
        case "light rain":
          clima = "https://openweathermap.org/img/wn/10d.png"
          break;
        case "rain":
          clima = "https://openweathermap.org/img/wn/10d.png"
          break;
        case "thunderstorm":
          clima = "https://openweathermap.org/img/wn/11d.png"
          break;
        case "snow":
          clima = "https://openweathermap.org/img/wn/13d.png"
          break;
        case "mist":
          clima = "https://openweathermap.org/img/wn/50d.png"
          break;
        case "overcast clouds":
          clima = "https://openweathermap.org/img/wn/04d.png"
          break;
        default:
          clima = "erro";
      }
      console.log(clima)
      $("#weather-temp").html(
        `<div class="xii card card-body mb-3 mt-3">
          <h4>${result.name}<img src="${clima}"></h4>
          <small>Temperatura Atual: ${atual}°</small>
          <small>Mínima: ${min}°</small>
          <small>Máxima: ${max}°</small>
          <small class="bi bi-droplet">Humidade: ${result.main.humidity}%</small>
          <small>Vento: ${result.wind.speed}m/s</small>
          <small>${result.weather[0].description}</small>
        </div>`
      );
    }
  });
}
