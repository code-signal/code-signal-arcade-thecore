int solution(int k) {
    int r = 0;
    int y = 0;
    for(; k; --k)
        (k % 2 ? r : y) += k * k;
    return y - r;
}


//  Alt 2
int solution(int k) {
    int r = 0;
    for (int i = 1; i <= k; i++) {
        r += i * i * (i % 2 * 2 - 1);
    }
    return -r;
}

//  Alt 3
int solution(int k) {
    int yellow = 0;
    int red = 0;
    for (int i = 1; i <= k; i += 2) yellow += i*i;
    for (int i = 2; i <= k; i += 2) red += i*i;
    return red-yellow;
}

//  Alt 4
int solution(int k) {

    int ans = 0;
    for(int i = 1; i <= k; i++)
    {
        if(i % 2)
        {
            ans -= i * i;
        }
        else
        {
            ans += i * i;
        }
    }
    
    return ans;
}

// Alt 5
int solution(int k) {
    return pow(-1, k)*k*(k+1)/2;
}

//  Alt 6
int solution(int k) {
    int red = 0, yellow = 0;
    for(int i=1; i<=k;i++){
        if(i&1) yellow+=i*i;
        else red+=i*i;
    }
    return red - yellow;
}
