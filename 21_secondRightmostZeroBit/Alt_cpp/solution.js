int solution(int n) {
    return n |= ~n & -~n, ~n & -~n;
  }

// Alt 2
int solution(int n) {
    return ~n & ((n|(n+1))+1) ;
  }

// Alt 3
int solution(int n) {
    return (n&3)==3?4*solution(n>>2):
           (n&3)==2?2*solution((n>>1)&~1):
           (n&3)==1?2*solution((n>>1)&~1):
           2;
  }
  