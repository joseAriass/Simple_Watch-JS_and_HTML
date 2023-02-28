function setTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
  
    hoursElement.innerText = padNumber(hours);
    minutesElement.innerText = padNumber(minutes);
    secondsElement.innerText = padNumber(seconds);
  }
  
  function padNumber(number) {
    return number < 10 ? `0${number}` : number;
  }
  
  setInterval(setTime, 1000);
  