int solution(int a, int b, int n) 
{
    int i, dollar = 0;
    for(i = 0; i < n; i+=1)
    {
        dollar += a++ * b++;
    }
    return dollar;
}
