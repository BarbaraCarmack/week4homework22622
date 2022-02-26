function formatDate(date)  {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
}
let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
let day = days[now.getDay()];

return `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement=document.querySelector ("#city");
  let cityInput=document.querySelector ("#city-input");
  cityElement.innerHTML=(cityInput.value);
 
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm=document.querySelector("#search-form");
searchForm.addEventListener ("submit", search)''


function convertToFahrenheit (event)  {
    event.preventDefault();
    let temperatureElement=document.querySelector ("#temperature");
    temperatureElement.innerHTML=66;
  }
  function convertToCelsius (event)  {
    event.preventDefault();
    let temperatureElement=document.querySelector ("#temperature");
    temperatureElement.innerHTML=19;


