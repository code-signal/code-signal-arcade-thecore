int solution(int a) {
    int b = 0;
    while (a > 0) {
        b <<= 1;
        b |= a & 1;
        a >>= 1;
    }
 
    return b;
}

// Alt 2
int solution(int a) {
    int ket_qua = 0, n = log2(a);
    for(int i = 0; i <= n; i++)
    {
        int m = log2(a);
        ket_qua += pow(2, n - m);
        a -= pow(2, m);
        if(a == 0)
            break;
    }
    return ket_qua;
}
