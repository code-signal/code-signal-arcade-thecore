int solution(int a, int b) {
    int r = 0;
    for (int i = a; i <= b; i++) {
        r += __builtin_popcount(i);
    }
    return r;
}


//  Alt 2
int solution(int a, int b) {
    int ret = 0;
    for (int i = a; i <= b; i++)
    {
        std::bitset<8> b(i);
        ret += b.count();
    }
    return ret;
}

// Alt 3
int solution(int a, int b) {
    
    int res = 0;
    
    for (size_t k = a; k <= b; ++k) {
        int i = k;
        while (i > 0) {
            res += i & 1;
            i = (i >> 1);
        }
    }
    return res;
}
