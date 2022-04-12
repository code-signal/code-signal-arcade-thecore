int solution(int a, int b, int n) {
   
    return a * b * n + (a + b) * n * (n - 1) / 2 
           + n * (n - 1) * (2 * n - 1) / 6;
}

// Alt 2
int solution(int a, int b, int n) {
    int r = 0;
    while (n--)
        r += a++ * b++;
    return r;
}

