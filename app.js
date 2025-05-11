function saveRating() {
  const rating = document.getElementById('rating').value;
  const now = new Date();
  const timestamp = now.toLocaleString(); // e.g., "5/11/2025, 3:42 PM"

  if (!rating || rating < 1 || rating > 10) {
    alert("Please enter a number between 1 and 10.");
    return;
  }

  let data = JSON.parse(localStorage.getItem('ratings')) || [];
  data.push({ timestamp, rating });
  localStorage.setItem('ratings', JSON.stringify(data));

  document.getElementById('rating').value = ''; // clear input
  showHistory();
}

function showHistory() {
  const data = JSON.parse(localStorage.getItem('ratings')) || [];

  // Reverse to show latest first
  const history = data.slice().reverse()
    .map(entry => `<div>${entry.timestamp}: ${entry.rating}/10</div>`)
    .join('');

  document.getElementById('history').innerHTML = history;
}

window.onload = showHistory;
