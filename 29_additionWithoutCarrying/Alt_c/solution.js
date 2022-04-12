int solution(int param1, int param2) {

    int  a;
    int b;
    int c;
    int somme=0;
    for (int i=0;i<5;i++)
    {
    a=param1%10;
    b=param2%10;
    c=a+b;
    if (c>=10) c-=10;
    param1=param1/10;
    param2=param2/10;
    printf ("%d %d %d %d %d \n",a,b,c, param1, param2);
    somme+=c*(int)(pow(10,i));
    }
        
    return somme;
    }

//  Alt 2
int solution(int param1, int param2) {
    int s=0,l;
    int k=(param1>param2?log10(param1):log10(param2));
    printf("%d   ",k);
    for(int i=0;i<=k;i++){
        printf("%d   ",s);
        l=pow(10,k-i);
        s=s*10+((param1/l)%10+(param2/l)%10)%10;
    }
    return s;
}

//  Alt 3
int solution(int param1, int param2) {
    int res=0;
    int modulo=1;
    while(param1 || param2){
        res+=(param1%10 + param2%10)%10 * pow(10,modulo++ -1);
        param1/=10;
        param2/=10;
    }
    return res;
}
