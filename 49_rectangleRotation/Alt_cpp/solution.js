int solution(int a, int b) {
    a/=1.414;
    b/=1.414;
    return 2*a*b+a+b|1;
}

// Alt 2
int small(int s) {
    double d = static_cast<double>(s);
    return std::ceil(std::floor(d/std::sqrt(2))/2.0)*2;
}

int big(int s) {
    double d = static_cast<double>(s);
    return std::floor(d/(2.0*std::sqrt(2)))*2+1;
}

int solution(int a, int b) {
    int w = small(a);
    int h = small(b);
    int W = big(a);
    int H = big(b);
    return w*h+W*H;
}

// Alt 3
int solution(int a, int b) {
    // Rotate 45 degrees
    a /= std::sqrt(2);
    b /= std::sqrt(2);
    
    return 2*a*b + a + b | 1;
    
// Alt 4
def solution(a, b):
    new_a = math.ceil(a/math.sqrt(2))
    new_b = math.ceil(b/math.sqrt(2))
    result = new_a * new_b + (new_a-1) * (new_b - 1)
    if (new_a + new_b) % 2 == 1:
        result -= 1
    return result
    