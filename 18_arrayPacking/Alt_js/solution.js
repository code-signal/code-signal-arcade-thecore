function solution(a) {
    return a.reduce((value, byte, i) => value + byte * Math.pow(256, i));
}
