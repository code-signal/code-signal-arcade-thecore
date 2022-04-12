function differentRightmostBit(n, m) {
    return (
      1 <<
      (n ^ m)
        .toString(2)
        .split("")
        .reverse()
        .join("")
        .indexOf("1")
    );
  }

//  Alt 2
function solution(n, m) {
    return 2 ** (Math.log((n ^ m) & -(n ^ m))/Math.log(2)) ;
  }

  
// Alt 3
function solution(n, m) {
    return (f = (a, b, i) => (a & 1) === (b & 1) ? f(a>>1, b>>1, i+1) : 2 ** i)(n, m, 0) ;
  }
  