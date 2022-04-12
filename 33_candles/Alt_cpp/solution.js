int solution(int c, int n) {
    return c >= n ? n + solution(c - n + 1, n) : c;
}


//  Alt 2
int solution(int c, int m) 
{
    int s = c;
    for (;  c >= m; c = c / m + c % m)
        s += c / m;
    return s;
}

// Alt 3
int solution(int c, int m) {
    int l = 0, b = c;
    while ((c + l) / m)
        { b += (c + l) / m; l = (c + l) % m; c /= m; }
    return b;
    }

// Alt 4  
int solution(int solutionNumber, int makeNew) {
    int count = solutionNumber, leftovers = solutionNumber, c;
    while(leftovers >= makeNew) {
        c = leftovers / makeNew;
        count += c;
        leftovers %= makeNew;
        leftovers += c;
        std::cout << count << ' ';
    }
    return count;
}
