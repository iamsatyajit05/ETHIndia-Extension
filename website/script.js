const targetDate = new Date("2023-12-08T00:00:00+05:30");

function updateTimer() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const milliseconds = timeRemaining % (1000 * 60 * 60 * 24);

    document.getElementById("days").textContent = days;
    document.getElementById("milliseconds").textContent = milliseconds.toString().slice(0, 6).padStart(6, '0');
}

setInterval(updateTimer, 1);