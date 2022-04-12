function solution(n) {
  return ~(n |= -~n) & -~n;
}


