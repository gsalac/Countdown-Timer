let countdown;
const htmlMins = document.querySelector('.mins');
const htmlSeconds = document.querySelector('.seconds');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  let mins = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;

  if (mins < 10) {
    mins = '0' + mins;
  }

  if (remainderSeconds < 10) {
    remainderSeconds = '0' + remainderSeconds;
  }

  const displayMins = `${mins}`;
  const displaySeconds = `${remainderSeconds}`;
  htmlMins.textContent = displayMins;
  htmlSeconds.textContent = displaySeconds;
}

timer(900);
