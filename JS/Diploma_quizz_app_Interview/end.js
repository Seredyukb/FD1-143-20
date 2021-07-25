const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

if (mostRecentScore >= 2000) { finalScore.innerText = mostRecentScore + ' Ваши знания великолепны!' }
else if (mostRecentScore >= 1500 && mostRecentScore <= 2000) {
    finalScore.innerText = mostRecentScore + ' Ваши знания достаточно хороши, так держать!'
} else if (mostRecentScore < 1500) {
    finalScore.innerText = mostRecentScore + ' Не плохой результат, но хотелось бы лучше!'
};


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');


};
