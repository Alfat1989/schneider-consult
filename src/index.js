const clocks = document.querySelector(".clocks");
console.log(clocks);

const time = () => {
  const timeArg = new Date();
  const housr =
    timeArg.getHours() < 10 ? "0" + timeArg.getHours() : timeArg.getHours();
  const minutes =
    timeArg.getMinutes() < 10
      ? "0" + timeArg.getMinutes()
      : timeArg.getMinutes();
  const seconds =
    timeArg.getSeconds() < 10
      ? "0" + timeArg.getSeconds()
      : timeArg.getSeconds();
  const timeNow = `${housr}:${minutes}:${seconds}`;

  return (clocks.innerHTML = timeNow);
};

setInterval(time, 1000);

const anlogClock = () => {
  const deg = 6;
  const hr = document.querySelector("#hr");
  const mn = document.querySelector("#mn");
  const sc = document.querySelector("#sc");

  const day = new Date();
  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * deg;
  const ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(anlogClock, 1000);
