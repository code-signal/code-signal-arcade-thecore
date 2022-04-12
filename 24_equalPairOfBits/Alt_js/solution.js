function equalPairOfBits(n, m) {
    return (
      1 <<
      (
        (n ^ m)
          .toString(2)
          .split("")
          .reverse()
          .join("") + "0"
      ).indexOf("0")
    );
  }

// Alt 2
function solution(n, m) {
    return (function(){
      let ndiv, mdiv;
      
      for(let i=0;;i++){
        if(n%2 == 1){ ndiv = 1; n -= 1; } else ndiv = 0;
          
        if(m%2 == 1){ mdiv = 1; m -= 1; } else mdiv = 0;
        
        if(ndiv == mdiv) return Math.pow(2, i);
          
        n /= 2; m /= 2;
      }
    })() ;
  }

// alt 3
function solution(n, m) {
    return (f = b => (n & b) === (m & b) ? b: f(b << 1))(1) ;
  }

// alt 4
function solution(n, m) {
    return ((n&1) === (m&1)) ? 1 : 2 * solution(n >>> 1, m >>> 1) ;
  }
  