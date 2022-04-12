int solution(int v) {
    int y = 1;
    for (; v > 10; y *= 10)
        v = (v + 5) / 10;
    return v * y;
    
}


// Alt 2
int solution(int v) {
    int t = 1;
    int p = 0;
    while(v/t!=0)
    {
        int u = v/t + p;
        v = u * t;
        p = (u % 10 > 4 ? 1 : 0);
        t *= 10;
    }
    
    return v;
}

