bool solution(int n) {
    while (n%10==0)
        n/=10;
    while (n%10)
        n/=10;
    return n;
}

// Alt 2
bool solution(int n) 
{
    while(n % 10 == 0)
        n /= 10;
    while(n)
    {
        if(!(n % 10))
            return 1;
        n /= 10;
    }
    return 0;
}
