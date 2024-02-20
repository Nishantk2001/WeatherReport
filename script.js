const searchbtn = document.getElementById("search-btn");
const input = document.getElementById("city-input");
const cityName = document.getElementById("cityName");
const cityTime = document.getElementById("cityTime");
const cityTemp = document.getElementById("cityTemp");
const cityHumidity = document.getElementById("cityHumidity");
const cityWind = document.getElementById("cityWind");
const cityCloud = document.getElementById("cityCloud");
const weatherIcon = document.getElementById("weatherIcon");

async function getData(cityName) {
  const weatherData = await fetch(
    `URL+yourApi Kay ${cityName}`
    // http://api.weatherapi.com/v1/current.json?key=Your Api Key=${cityName}&aqi=yes
  );
  return await weatherData.json();
}

searchbtn.addEventListener("click", async () => {
  await fetchData();
});

input.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    await fetchData();
  }
});

async function fetchData() {
  const value = input.value;
  const result = await getData(value);
  // console.log(result);
  cityName.innerText = `${result.location.name}, ${result.location.region}- ${result.location.country}`;
  cityTime.innerText = `Local-Time: ${result.location.localtime} ⌛`;
  cityTemp.innerText = `Temprature: ${result.current.temp_c} °C 🌡️`;
  cityHumidity.innerText = `Humidity: ${result.current.humidity} % 🧑‍🤝‍🧑`;
  cityWind.innerText = `Wind: ${result.current.wind_kph} kph 💨`;
  cityCloud.innerText = `Cloud: ${result.current.cloud}% ⛅`;
  weatherIcon.src = `${result.current.condition.icon}`;
}
