function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  //const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  //const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    //days,
    //hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  //const daysSpan = clock.querySelector('.days');
  //const hoursSpan = clock.querySelector('.hours');
  if (clock) {
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    //daysSpan.innerHTML = t.days;
    //hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      window.location.assign(window.location.href + "/next");
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
  console.log("I've been init");
  }
}
 export { initializeClock };
