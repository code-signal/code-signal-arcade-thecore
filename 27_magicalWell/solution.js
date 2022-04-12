function solution(a, b, n) {
  return n != 0 ? a * b + solution(++a, ++b, --n) : 0;
}



