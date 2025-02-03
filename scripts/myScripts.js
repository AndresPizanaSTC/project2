document.addEventListener("DOMContentLoaded", () => {
    let timer;
    let seconds = 0, minutes = 0, hours = 0;
    let running = false;
    const gif = document.getElementById("timerGif");

    function updateTimer() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        document.getElementById("timer").innerText =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startTimer() {
        if (!running) {
            running = true;
            gif.classList.remove("hidden");
            timer = setInterval(updateTimer, 1000);
        }
    }

    function stopTimer() {
        running = false;
        clearInterval(timer);
        gif.classList.add("hidden");
    }

    function resetTimer() {
        running = false;
        clearInterval(timer);
        seconds = minutes = hours = 0;
        document.getElementById("timer").innerText = "00:00:00";
        gif.classList.add("hidden");
    }

    document.getElementById("startBtn").addEventListener("click", startTimer);
    document.getElementById("stopBtn").addEventListener("click", stopTimer);
    document.getElementById("resetBtn").addEventListener("click", resetTimer);
});
