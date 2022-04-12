function solution(n, k) {
    return parseInt(n.toString(2).split('').map((v,i,a)=>(i==a.length-k)?'0':v).join(''),2);
  }
  
// Alt 2
function solution(n, k) {
    return n & ~Math.pow(2, k-1) ;
  }
  