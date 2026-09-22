document.addEventListener("DOMContentLoaded", () => {
  function updateclock() {
    const myDate = new Date();
    const options = {
      timeZone: 'Asia/Qatar',
      timeStyle: 'medium',
    }
    const currentTime = myDate.toLocaleString('en-US', options);
    const time_text = document.getElementById("current-time");
    time_text.innerHTML = `It is currently <b>${currentTime}</b> for me! <br> Asia/Qatar (GMT+3)`
  }
   setInterval(updateclock, 1000)
});
