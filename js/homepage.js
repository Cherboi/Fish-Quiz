function goToQuiz() {
  window.location.href = "./";
}

function checkHighScore() {
  const highscore = window.localStorage.getItem('highscore')
  if (highscore) {
    const scoreText = window.document.getElementById('highscore')
    scoreText.textContent = highscore
  }
}

checkHighScore()