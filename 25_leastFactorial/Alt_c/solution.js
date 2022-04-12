int solution(int n) {
    int k=1;
    int counter=1;
    while (k<n){
        k*=counter++;
    }
    return k;
}

// Alt 2
int factorial(int n)
{
    if(n < 0) return -1;
    if(n == 0) return 0;
    if(n == 1) return 1;
    if(n == 2) return 2;
    int i, fac = 2;
    for(i = 3; i <= n; i+= 1)
    {
        fac *= i;
    }
    return fac;
}

int solution(int n) 
{
    int i;
    for(i = 0; i <= n; i+=1)
    {
        if(factorial(i) >= n)
            return factorial(i);
    }
    return -1;
}
