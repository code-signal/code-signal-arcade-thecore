bool solution(int score1, int score2) {
    int winner = std::max(score1, score2);
    int loser = std::min(score1, score2);
    
    return (winner == 6 && loser < 5)
        || (winner == 7 && loser < 7 && loser > 4);
}