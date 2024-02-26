const adviceElement = document.querySelector('.quote-text');
const generateButton = document.querySelector('.btn-click');

async function fetchAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  return data.slip.advice;
}

async function updateAdvice() {
  adviceElement.textContent = 'Loading advice...';
  const advice = await fetchAdvice();
  adviceElement.textContent = advice;
}

generateButton.addEventListener('click', updateAdvice);

// Initial advice load
updateAdvice();