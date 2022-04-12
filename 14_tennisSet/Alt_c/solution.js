bool solution(int score1, int score2) {
    if(score1>7||score1<0 || score2>7 || score2<0 || score1==score2)
        return false;
    
    if(score1<score2){
        int tmp = score1;
        score1 = score2;
        score2= tmp;
    }
    
    if(score1==6){
        if(score2<5)
            return true;
        else return false;    
    }
    if(score2>=5)
        if(score1==7)
            return true;
    else return false;
    
    return false;
}
