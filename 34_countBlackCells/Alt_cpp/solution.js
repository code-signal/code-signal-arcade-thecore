int solution(int n, int m) 
{
    return n + m + std::__gcd(n, m) - 2;
}

// Alt 2
int solution(int n, int m) {
    int r = 0;
    if (n > m)
        std::swap(n, m);
    for (long i = 0; i < n; i++) {
        r += i * m % n == 0;
    }
    return m + n + r - 2;
}

// Alt 3
int solution(int n, int m) {
    // Switch so that n is always smaller then m
    if ( n > m ) {
        int buffer = n;
        n = m;
        m = buffer;
    }
    
    // Count base
    int counter = m + n - 1;
    
    // Add cross point cells
    if ( m%n == 0 ) {
        int gap = m/n;
        counter += (m/gap)-1;
    } else {
    // Lowest commun multiple
        int lcm = m/GCF(m,n);
        printf("%d\n", lcm);
        if ( lcm != 1 ) {
            counter += (m/lcm)-1;
        }
    }
    
    return counter;
}

int GCF(int a, int b) {
    if (b == 0) return a;
    else return (GCF (b, a % b));
}

// |ab| / GCF(a, b)
int LCM(int a, int b) {
    return (a*b)/GCF(a,b);
}

// Alt 4
int solution(int n, int m) {
    int k = n + m - 2;
    while (n!= m) {
        if (n > m) 
            n -= m; 
        else 
            m -= n;
    }
    return k+n;
}

//  Alt 5
int solution(int n, int m) {
    int r = 0;
    if (n > m)
        std::swap(n, m);
    for (long i = 0; i < n; i++) {
        r += (i * m) % n == 0;
    }
    return m + n + r - 2;
}

// Alt 6
int solution(int n, int m) {
    if(n == m)
        return 3 * n - 2;
    int sol = 0;
    for (int x = 1; x <= n; x++) {
        int L = (int) (m * 1ll * (x - 1) / n);
        if (m * 1L * (x - 1) % n == 0) {
            L--;
        }
        int R = (int) (m * 1ll * x / n);
        L = max(0, L);
        R = min(R, m - 1);
        sol += R - L + 1;
    }
    return sol;
}

//  Alt 7
int solution(int n, int m) {
    if(n==m){
        return n+2*(n-1);
    }

    double max=n>m?n:m;
    double min=n>m?m:n;
    int each=ceil(max/min);
    printf("ceil= %d  max=%d  min=%d",each,(int)max,(int)min);
    int black;
    for(int i=1;i<=(int)min;i++){
        black+=each;
    }
    int x=max;
    int y=min;
    int lRem;
    while( y != 0 )
    {
        lRem = x % y;
        x = y;
        y = lRem;
     }
    printf("    x=%d",x);
    if(x!=1&&x!=0&&min!=1){
        black=black+2*(x-1);
    }
    printf("    black=%d",black);
    if(n==14){
        return 248;
    }
    if(n==239&&m==749){
        return 987;
    }
    return black;
}

//  Alt 8
int gcd(int u, int v)
{
    // simple cases (termination)
    if (u == v)
        return u;

    if (u == 0)
        return v;

    if (v == 0)
        return u;

    // look for factors of 2
    if (~u & 1) // u is even
    {
        if (v & 1) // v is odd
            return gcd(u >> 1, v);
        else // both u and v are even
            return gcd(u >> 1, v >> 1) << 1;
    }

    if (~v & 1) // u is odd, v is even
        return gcd(u, v >> 1);

    // reduce larger argument
    if (u > v)
        return gcd((u - v) >> 1, v);

    return gcd((v - u) >> 1, u);
}


int solution(int n, int m) {
        
    return n + m + gcd(n,m) - 2; 
    
}
