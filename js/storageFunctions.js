export const loadScore = (idScoreElement) => {
    const score = localStorage.getItem('score');
    if (score) {
        return score;
    } else {
        storeScore(0);
        return 0;
    }
}

export const storeScore = (score) => {
    localStorage.setItem('score', score);
}