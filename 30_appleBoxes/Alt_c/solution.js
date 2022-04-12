int solution(int k) {
    return (1-(k&1)*2)*(k+1)*k/2;
}


// Alt 2
int solution(int k) {
    int a, b, temp1, temp2, sum1 = 0, sum2 = 0;
    
    if (k > ((k/2)*2)) // if odd
    {
        
        for (a = 1; a <= k; a=a+2)
        {
            sum1 += a*a;
            sum2 += (a-1)*(a-1);
        }
    }
    else
    {
        for (a = 2; a <= k; a=a+2)
        {
            sum2 += a*a;
            sum1 += (a-1)*(a-1);
        }
    }
    return sum2 - sum1;

}
