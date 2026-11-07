function updateClock() {
    const now = new Date();

    document.getElementById("time").innerText =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

setInterval(updateClock, 1000);
updateClock();


