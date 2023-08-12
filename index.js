let doc = document;
let hrs = doc.querySelector(".hrs");
let min = doc.querySelector(".min");
let sec = doc.querySelector(".sec");

setInterval(() => {
  let currentMins = new Date().getMinutes() * 6;
  let currentSecs = new Date().getSeconds() * 6;
  let currentHrs = new Date().getHours() * 30;
  console.log(currentHrs, "hrs degree");
  //   console.log(currentSecs, "secs degree");
  //   console.log(currentMins, "min degree");
  min.style.transform = `rotate(${currentMins}deg)`;
  sec.style.transform = `rotate(${currentSecs}deg)`;
  hrs.style.transform = `rotate(${currentHrs}deg)`;
}, 1000);
