let intervalId = null;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function startChangingColor() {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomColor();
    }, 1000);
  }
}

function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}

document.getElementById('startBtn').addEventListener('click', startChangingColor);
document.getElementById('stopBtn').addEventListener('click', stopChangingColor);
