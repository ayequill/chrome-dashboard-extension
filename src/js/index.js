// fetch random image and render it and its author
fetch(
  "https://api.unsplash.com/photos/random?client_id=KU2xKkCfogrNGxcflWBJ8cqyeAtU2LGMylH6pHmpHis&orientation=landscape&query=anime"
)
  .then((res) => res.json())
  .then((data) => {
    // set body bg to a random image
    document.body.style.backgroundImage = `url('${data.urls.regular}')`;

    // created a new div and appended it to my document
    const authorDiv = document.createElement("div");
    authorDiv.innerHTML = `<p class="author"> <strong>Credit:</strong> ${data.user.first_name}</p>`;
    document.querySelector(".container").appendChild(authorDiv);
  })
  // a chained function run when API fails
  .catch((err) => {
    document.body.style.backgroundImage = `url('./dist/assets/img/def-bg.jpg')`;
  });

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => {
    if (!res.ok) {
      throw Error(`Cant fetch API - ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    document.querySelector(".crypto").innerHTML = `
    <div class="crypto-items">
    <img src="${data.image.small}" alt="">
    <p>${data.name}</p>
 
  </div >
  <p class="btc">🎯: $${data.market_data.current_price.usd}</p>
  <p>👆: $${data.market_data.high_24h.usd}</p>
  <p>👇: $${data.market_data.low_24h.usd}</p>

  `;
  })
  .catch((err) => console.error(err));

function setTime() {
  const date = new Date();
  const currentDate = date.toLocaleDateString("en-us", {dateStyle: "long"})
  const currentTime = date.toLocaleTimeString("en-us", {
    timeStyle: "short",
  })
  //  rendering current time and date
  document.querySelector(".date").innerHTML =`<h1 class="time">${currentDate}</h1>
  <h1>${currentTime}</h1>`

  console.log();
}

setInterval(setTime, 1000);

const geoOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
};


navigator.geolocation.getCurrentPosition(position =>{

  // fetching weather updates from the users coords
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=00a8abcf452e2e4b24244dd5ed2fc66a&units=imperial`)
  .then(res => res.json())
  .then(data =>{

    console.log(data);
    console.log(data.weather[0].icon);
    const {temp,humidity,pressure,feels_like } = data.main


    document.querySelector('.weather-container').innerHTML = `
    <div class="weather">
    <img src="http://openweathermap.org/img/wn/02n@2x.png" class="weather-img">
      <h2>${temp.toFixed(0)}°</h2>
      </div>
      <p>${data.name}</p>
      
    `
  })
  console.log(position.coords.latitude);
}), geoOptions

