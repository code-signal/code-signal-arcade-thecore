int solution(int v1, int w1, int v2, int w2, int maxW) {
    int max = 0;
    if (w1 + w2 <= maxW) {
        return v1 + v2;
    } 
    if (w1 <= maxW) {
        max = v1;
    }
    if (w2 <= maxW && v2 > max) {
        max = v2;
    }
    return max;
}
