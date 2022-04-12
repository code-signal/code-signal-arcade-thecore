bool solution(int n) {
    int a, temp, dig = 0, stop = 0;
    
    for ( a = n; a >= 10; a/=10)
    {
        if (a%10 > 0 && stop == 0)
        {
            dig = 1;
            stop = 1;
        }
        if (a%10 == 0 && dig == 1) return true;
    }
    return false;

}

// Alt 2
bool solution(int n) {
    int mark=0;
    int x;
    while(n>0){
        x=n%10;
        if(x!=0)
            mark = 1;
        if(x==0 && mark==1)
            return true;
        n/=10;
    }
    return false;
}

//  Alt 3 
bool solution(int n) {
    while(n%10==0 && n) n/=10;
    while(n%10!=0) n/=10;
    return n!=0;
}
