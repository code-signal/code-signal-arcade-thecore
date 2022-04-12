int solution(int n, int l, int r) {
    if (2*l > n) return 0;
    if (2*r < n) return 0;
    l = std::max(l, n-r);
    return n / 2 - l + 1;
}

// Alt 2
int solution(int n, int l, int r) {
    int c = n / 2 - max(n - r, l) + 1;
    return c > 0 ? c : 0;
}

// Alt 3
int solution(int n, int l, int r) {
    int sum=0;
    for(int i=l;i<=r;i++){
        for(int j=i;j<=r;j++){
            if( (i+j) == n){
                sum++;
            }
            else if( (i+j) > n){
                break;
            }
        }
    }
    return sum;
}
