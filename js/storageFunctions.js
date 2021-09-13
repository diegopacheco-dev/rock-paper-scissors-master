export const loadScore = (idScoreElement) => {
    const score = localStorage.getItem('score');
    if (score) {
        console.log("score : ", score);
        return score;
    } else {
        storeScore(0);
        console.log("no hay score : ", 0);
        return 0;
    }
}

export const storeScore = (score) => {
    console.log("guardando score : ", score);
    localStorage.setItem('score', score);
}