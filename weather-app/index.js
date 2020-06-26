///current date///
let today = document.querySelector("span#today");
let now = new Date();
console.log(now);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let todays = days[now.getDay()];
console.log(todays);
today.innerHTML = `${todays}`;
let time = document.querySelector("span#time");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
console.log(now.getHours);
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
console.log(now.getMinutes);
time.innerHTML = `${hours}:${minutes}`;
