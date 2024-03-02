let timerInterval;
let startTime;
let pausedTime = 0;
let isPaused = false;

function updateTimer() {
  let timer = document.getElementById('timer');
  let currentTime = new Date().getTime();
  let elapsedTime = new Date(currentTime - startTime - pausedTime);
  let hours = elapsedTime.getUTCHours().toString().padStart(2, '0');
  let minutes = elapsedTime.getUTCMinutes().toString().padStart(2, '0');
  let seconds = elapsedTime.getUTCSeconds().toString().padStart(2, '0');
  timer.textContent = `${hours}:${minutes}:${seconds}`;
}

document.addEventListener('DOMContentLoaded', function() {
  let startButton = document.getElementById('startButton');
  let pauseButton = document.getElementById('pauseButton');
  let resumeButton = document.getElementById('resumeButton');

  startButton.addEventListener('click', function() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
    startButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
    resumeButton.style.display = 'none';
  });

  pauseButton.addEventListener('click', function() {
    if (!isPaused) {
      clearInterval(timerInterval);
      isPaused = true;
      pausedTime += new Date().getTime() - startTime;
      pauseButton.style.display = 'none';
      resumeButton.style.display = 'inline-block';
    }
  });

  resumeButton.addEventListener('click', function() {
    if (isPaused) {
      startTime = new Date().getTime() - (pausedTime + (startTime ? new Date().getTime() - startTime : 0));
      timerInterval = setInterval(updateTimer, 1000);
      isPaused = false;
      pauseButton.style.display = 'inline-block';
      resumeButton.style.display = 'none';
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    let timer = document.getElementById('timer');
    let offsetX, offsetY;
  
    timer.addEventListener('mousedown', function(event) {
      offsetX = event.clientX - timer.getBoundingClientRect().left;
      offsetY = event.clientY - timer.getBoundingClientRect().top;
  
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  
    function onMouseMove(event) {
      let x = event.clientX - offsetX;
      let y = event.clientY - offsetY;
  
      timer.style.left = x + 'px';
      timer.style.top = y + 'px';
    }
  
    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  });
    
  
});
