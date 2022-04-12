int getDivisorsCount(int n) {
    if(n == 1) {
        return 1;
    }
    int count(2);
    for(int i = 2; i <= n / 2; ++i) {
        if(n % i == 0) {
            ++count;
        }
    }
    return count;
}

std::vector<int> solution(int n) {
    std::vector<int> dividersCount(n, 0);
    std::vector<int> maxWeak(2, 0);
    maxWeak[1] = 1;
    dividersCount[1] = 1;
    int currMaxDiv = 1;
    
    if(n == 1) {
        return maxWeak;
    }
    for(int i = 2; i <= n; ++i) {
        int divCount = getDivisorsCount(i);
        int currWeak = 0;
        for(int j = divCount + 1; j <= currMaxDiv; ++j) {
            if(dividersCount[j] > 0) {
                currWeak += dividersCount[j];
            }
        }
        dividersCount[divCount]++;
        if(divCount > currMaxDiv) {
            currMaxDiv = divCount;
        }
        if(currWeak > maxWeak[0]) {
            maxWeak[0] = currWeak;
            maxWeak[1] = 1;
        } else if(currWeak == maxWeak[0]) {
            maxWeak[1]++;
        }
    }
    
    return maxWeak;
}
