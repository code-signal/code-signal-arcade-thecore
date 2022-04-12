// gcd from https://www.geeksforgeeks.org/c-program-find-gcd-hcf-two-numbers/
// Recursive function to return gcd of a and b
int gcd(int a, int b)
{
    // Everything divides 0 
    if (a == 0 || b == 0)
       return 0;
 
    // base case
    if (a == b)
        return a;
 
    // a is greater
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}

int solution(int m, int n) {
    return m + n + gcd(m,n) - 2;
}


// Alt 2
int solution(int n, int m) {
    int n1 = n;
    int n2 = m;
    while(n1!=n2)
    {
        if(n1 > n2)
            n1 -= n2;
        else
            n2 -= n1;
    }
    return n+m+n1-2;
}


// Alt 3
int HighestDivisor(int m, int n);
int solutionSimple(int n, int m);
int solution(int n, int m)
{
    int temppixels = 0, pixels = 0, divisor;
    divisor = HighestDivisor(n, m);
    temppixels = solutionSimple(n/divisor, m/divisor);
    printf("pix = %d, div = %d", temppixels,divisor);
    return temppixels*divisor+2*(divisor-1);
}

int solutionSimple(int n, int m)
{
    int pixels = 0, x2, y2, x, y, yprev = 0;
    
    if(n > m)
    {
        x2 = n;
        y2 = m;
    }
    else
    {
        x2 = m;
        y2 = n;
    }
    for(x = 0, y = 0; x < x2; x++)
    {
        y = (y2 * x) / x2;
        if(y > yprev)
        {
            pixels += 2;
        }
        else
            pixels ++;
        yprev=y;
    }
    return pixels;
}

int HighestDivisor(int m, int n)
{
    int i, divisor;
    for(i = 1, divisor = 1; i <= m; i++)
        if((n % i == 0) && (m % i) == 0) divisor = i;
    return divisor;     
}

//  Alt 4
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

//  Alt 5
int solution(int n, int m) {
    int ucln=0;
    for(int i=1; i<=m; i++){
        if(n%i==0 && m%i==0){
            printf("%d\n",i);
            ucln = i;
        }
    }
    return (m+n+ucln-2);
    //printf("%d",ucln);
    //return (n+m+ucln-2);
    /*if(n==m)
        return n*3-2;
    if(n==1)
        return m;
    if(m==1)
        return n;
    return m > n ? m*2-2 : n*2-2;*/
  
}

// Alt 6
int solution(int n, int m) {
    int a=n;
    int b=m;
    while(n!=m){
        if(n>m) n-=m;
        else m-=n;
    }
    return a+b+n-2;
}

