int solution(int solution, int makeNew) {
    int count=0;
    int left=0;
    while(solution){
        count+=solution;
        left+=solution;
        solution = (left/makeNew);
        left -=solution*makeNew;
        
    }
    return count;
}

// Alt 2
int solution(int solutionNumber, int makeNew) {
    int sum=0;
    int leftover=0;
    int a=0;
    while(1){
        if(solutionNumber+leftover<makeNew&&solutionNumber==0){
            break;
        }
        if(solutionNumber!=0){
            solutionNumber--;
            sum++;
            leftover++;
            printf("burning%d  ",solutionNumber);
        }
        else if(leftover>=makeNew){
            leftover=leftover-makeNew;
            solutionNumber++;
            printf("making%d  ",solutionNumber);
            printf("leftover%d  ",leftover);
        }
        
    }
    return sum;
}
