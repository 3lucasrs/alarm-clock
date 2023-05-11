const hour = document.querySelector("#hour_display");
const min = document.querySelector("#min_display");
const sec = document.querySelector("#sec_display");
let inputSec,
  inputMin,
  inputHour = null;
const audio = new Audio("assets/sound/alarm.mp3");
let registers = [];

setInterval(() => {
  let date = new Date();
  let dHour = date.getHours();
  let dMinute = date.getMinutes();
  let dSeconds = date.getSeconds();

  hour.innerHTML = `${formatTime(dHour)}`;
  min.innerHTML = `${formatTime(dMinute)}`;
  sec.innerHTML = `${formatTime(dSeconds)}`;

  isAlarm(dHour, dMinute, dSeconds);
}, 1000);

const formatTime = (time) => {
  return time < 10 ? "0" + time : time;
};

document.querySelector(".alarmButton").addEventListener("click", () => {
  inputHour = parseInt(document.querySelector("#vhour").value);
  inputMin = parseInt(document.querySelector("#vmin").value);
  inputSec = parseInt(document.querySelector("#vsec").value);

  if (inputHour >= 0 && inputMin >= 0 && inputSec >= 0) {
    registerLog(
      `Despertador definido para ás ${inputHour}:${inputMin}:${inputSec}`
    );
  } else {
    registerLog("Você precisa preencher todos os horários!");
  }
});

const isAlarm = (h, m, s) => {
  if (h == inputHour && m == inputMin && s == inputSec) {
    audio.play();
    registerLog("O despertador está tocando");
  }
};

const registerLog = (log) => {
  var ul = document.getElementById("log");
  var li = document.createElement("li");
  var text = document.createTextNode(log);

  if (registers.length >= 5) {
    let lis = document.querySelectorAll("li")[0];
    lis.parentNode.removeChild(lis);
  }
  
  li.appendChild(text);
  ul.appendChild(li);
  registers.push(text);
};
