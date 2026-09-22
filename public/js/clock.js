document.addEventListener("DOMContentLoaded", ()=> {
  function updateClock() {
    const date = new Date()
    const clockOptions = {
      timeStyle: "medium", 
      timeZone: "Asia/Qatar"
    }
    let currentTime = date.toLocaleString("en-us", clockOptions)
    document.getElementById("current-time").innerHTML = `It is currently ${currentTime} for me!<br>Asia/Qatar (GMT+3)`
  }

  setInterval(updateClock, 1000)
});
