function solution(n) {
  p = 1;
  for (i = 1; (p*=i++)<n;);
  return p;
}
