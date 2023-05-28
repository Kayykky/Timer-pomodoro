let timerInterval;
let segundos = 0;
let minutos = 0;

function pomodoro() {
  clearInterval(timerInterval);
  minutos = 25;
  segundos = 0;
  updateTimer();
  startTimer();
}

function intervalo() {
  clearInterval(timerInterval);
  minutos = 5;
  segundos = 0;
  updateTimer();
  startTimer();
}

function descanso() {
  clearInterval(timerInterval);
  minutos = 15;
  segundos = 0;
  updateTimer();
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function pararTimer() {
  clearInterval(timerInterval);
}

function tocarSom() {
  const audio = document.getElementById("audio");
  audio.play();
}

function updateTimer() {
  if (segundos === 0 && minutos === 0) {
    pararTimer();
    tocarSom();
    return;
  }

  segundos--;
  if (segundos < 0) {
    segundos = 59;
    minutos--;
    if (minutos < 0) {
      minutos = 0;
    }
  }

  const formattedTime = `${formatTime(minutos)}:${formatTime(segundos)}`;
  document.getElementById("timer").textContent = formattedTime;
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

document.getElementById("pomodoro").addEventListener("click", pomodoro);
document.getElementById("intervalo").addEventListener("click", intervalo);
document.getElementById("descanso").addEventListener("click", descanso);
