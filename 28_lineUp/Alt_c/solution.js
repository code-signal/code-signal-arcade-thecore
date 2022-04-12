int solution(char * commands) {
    bool f = true;
    int c = 0;
    for (int i = 0; commands[i]; i++) {
        if (commands[i] == 'L' || commands[i] == 'R') {
            f = !f;
        }
        if (f) {
            c += 1;
        }
    }
    return c;
}


// Alt 2
int solution(char * commands) {
    int i;
    int line=0;
    int turn = 0;
    printf ("Command %c %d\n",commands[i], strlen(commands) );
    for (i=0;i<strlen (commands);i++)
    {
        
        switch (commands[i]) {
                
            case 'A' :
                printf ("Command A");
              turn +=2;
                break;
            case 'L' : 
                printf ("Command L");
                turn +=1;
                break;
            case 'R' :
                printf ("Command R");
                turn -=1;
                break;
                
        }
        if (turn % 2 == 0) line++;
    }
    return line;
    }

// Alt 3
int solution(char * commands) {
    int i=0,j=0,k=0;
    while(1){
        if(commands[i]==76||commands[i]==82){
            j++;
        }
        else if(commands[i]==65&&j!=1){
            k++;
            printf("%d",i);
        }
        else if(commands[i]==0){
            break;
        }
        if(j==2){
            k++;
            j=0;
        }
        i++;
    }
    return k;
}

// Alt 4
int solution(char * commands) {
    int left=-1;
    int right = 1;
    int round = 2;
    int status = 0;
    int count=0;
    while(*commands!='\0'){
        switch(*commands){
            case 'L':
                status+=left;
                break;
            case 'R':
                status+=right;
                break;
            case 'A':
                status+=round;
                break;
        }
        if(status%2==0){
            count++;
        }
        commands++;
    }
    return count;
}
