function secondRightmostZeroBit(n) {
    return (
      1 <<
      (n.toString(2).length -
        n.toString(2).lastIndexOf("0", n.toString(2).lastIndexOf("0") - 1) -
        1)
    );
  }

// Alt 2
function solution(n) {
    return (function(input) {
      // Fuck your "only change the ..." policy
      
      var result = 0;
      var zeroFound = false;
      
      for (var i = 0; i < 32; i++) {
        if (!((input >> i) & 1)) {
          if (zeroFound) {
            result = i;
            break;
          }
          
          zeroFound = true;
        }
      }
      
      return Math.pow(2, result);
    })(n) ;
  }

// Alt 3
function solution(n) {
    return Math.pow(2, n.toString(2).split('').reverse().map(v=>parseInt(v)).map(function(v,i,a){
      if(v != 0) return '';
      else return a.indexOf(0,i+1);
    }).filter(v=>v)[0] );
  }
  
//  Alt 4
function solution(n) {
    return (
      1 <<
      (n.toString(2).length -
        n.toString(2).lastIndexOf("0", n.toString(2).lastIndexOf("0") - 1) -
        1)
    );
  }
  