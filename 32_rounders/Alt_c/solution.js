int solution(int value) {
    int c = 0, i = 1;
    while (value > 9) {
        c = (value%10 + c) < 5 ? 0 : 1;
        value /= 10;
        i *= 10;
    }
    return (value + c)*i; 
}

// Alt 2
int solution(int value) {
    int i;
        int div, div2;
        int reste;
    if (value < 5) return 1;
    if (value < 10) return 10;
        
    for (i=1;i<=9;i++)
    {
        printf ("Value : %d \n", value);
        div=pow(10,i);
        printf ("diviseur : %d \n", div);
        if (value< div) break;
        reste= value%div;
        printf ("reste : %d \n", reste);
        div2=((reste*10))/div;
        printf ("Ajustement : %d \n", div2);
        if (div2 <5) value-=reste; else value +=(div-reste);
    //    printf ("%d %d %d %d\n", div, reste, div2, value);
    }  
    return value;
    }
    
    