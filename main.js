//Selector
const hr = document.querySelector("#hour-hand");
const min = document.querySelector("#minute-hand");
const sec = document.querySelector("#second-hand");

var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(function () {
  d = new Date();
  second = d.getSeconds() * 6;
  minute = d.getMinutes() * 6;
  hour = d.getHours() * 30 + Math.round(minute / 12);
  sec.style.transform = "rotate(" + second + "deg)";
  min.style.transform = "rotate(" + minute + "deg)";
  hr.style.transform = "rotate(" + hour + "deg)";
}, 1000);
