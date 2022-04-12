int solution(int n, int l, int r) {
    int c=0;
    for(int a=l; a<=r; a++){
        if(n-a>=a && n-a<=r)
            c++;
    }    
    return c;
}

// Alt 2
int solution(int n, int l, int r) 
{
    int cnt = 0, i, j;
    for (i = l; i <= r; i++) 
    {
        j = n - i;
        if (j >= l && j <= r && j >= i) 
        {
            cnt++;
        }
    }
    /*
    for(i = l; i <= r; i+=1)
    {
        for(j = i; j <= r; j+=1)
        {
            //int sum = i + j;
            //printf("%d + %d = %d\n", i, j, sum);
            if((i + j) == n)
            {
                cnt+=1;
                //printf("%d == %d -> %d\n", n, sum, cnt);
            }
                
        }
    }*/
    return cnt;
}

// Alt 3
int solution(int n, int l, int r) {

    int i;
    int res= 0;
    for (i=l;i<=r;i++) {
    if (((n-i) <=r)  && (i <= (n-i)))
    {
        res ++;
        printf ("%d + %d = %d\n",i, n-i, n);
}
    }
return res;
}

// Alt 3
int solution(int n, int l, int r) {
    if(r-l==0&&r+l==n){
        return 1;
    }
    int k=0;
    for(int i=l;i<=n;i++){
        if(i+r>=n&&n>=i+i){
            k++;
            printf("%d",i);
        }
    }
    return k;
}
