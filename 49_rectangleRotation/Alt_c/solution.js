int solution(int a, int b) {
    int a1 = (a/sqrt(2))+1;
    int b1 = (b/sqrt(2))+1;
    int result= (a1*b1+(a1-1)*(b1-1));
    if (result % 2 == 0){
        return result-1;
    }
    return result;
}

// Alt 2
#include "math.h"

int solution(int a, int b) {
    int x = (int)(a / sqrt(2));
    int y = (int)(b / sqrt(2));
    if ((x + y) % 2 == 0) return x * y + (x + 1) * (y + 1);
    return (x + 1) * y + (y + 1) * x;
}
