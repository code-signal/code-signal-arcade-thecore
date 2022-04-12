int solution(int a) {
    int r = 0;
    for (; a; a >>= 1)
        r = r << 1 | a & 1;
    return r;
}

// Alt 2
int solution(int a) {
    int t = 0;
    while (a != 0) {
        t = 2 * t + a%2;
        a/=2;
    }
    return t;
}

