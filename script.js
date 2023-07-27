const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
  const inputCity = document.getElementById('inputCity').value;

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputCity+'&units=metric&appid=188623495ab5e43d45180fbc83a544b7')
  .then(response => response.json())
  .then(data => {
    const name = data.name;
    const temp = data.main.temp;
    const feels_like = data.main.feels_like;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    
    document.getElementById('icon').src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

    document.getElementById('tempar').textContent = temp.toFixed(0)+"°C";

    document.getElementById('feels').textContent = "Feels-like: "+feels_like.toFixed(0) +"°C";

    document.getElementById('humid').textContent = "Humidity: "+humidity+"%";

    document.getElementById('wind').textContent = "Wind: "+ speed + " m/s";

    document.getElementById('city').textContent = name;
    
    document.getElementById('descript').textContent = description;

    document.getElementById('errorCity').textContent = "";    
  })
  .catch(response => document.getElementById('errorCity').textContent = "Empty or Invalid city name")
})
