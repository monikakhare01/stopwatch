var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

function $id(id) {
    return document.getElementById(id);
}

function toggleTimer() {
    if (timer) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    timer = true;
    $id("start").innerText = 'Pause';
    stopwatch();
}

function stopTimer() {
    timer = false;
    $id("start").innerText = 'Start';
}

function resetTimer() {
    stopTimer();
    hr = min = sec = count = 0;
    updateDisplay();
    clearLaps();
}

function stopwatch() {
    if (timer) {
        count = (count + 1) % 100;

        if (count === 0) {
            sec = (sec + 1) % 60;

            if (sec === 0) {
                min = (min + 1) % 60;

                if (min === 0) {
                    hr = (hr + 1) % 100;
                }
            }
        }

        updateDisplay();
        setTimeout(stopwatch, 10);
    }
}

function updateDisplay() {
    $id("hr").innerText = formatTime(hr);
    $id("min").innerText = formatTime(min);
    $id("sec").innerText = formatTime(sec);
    $id("count").innerText = formatTime(count);
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

function lap() {
    var lapsList = $id('laps');
    var lapItem = document.createElement('li');
    lapItem.innerText = `${formatTime(hr)}:${formatTime(min)}:${formatTime(sec)}:${formatTime(count)}`;
    lapsList.appendChild(lapItem);
}

function clearLaps() {
    $id('laps').innerHTML = '';
}
