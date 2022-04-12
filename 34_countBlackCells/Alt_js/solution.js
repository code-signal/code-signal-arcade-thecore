function solution(n, m) {
  
    if (n == m) return (n + 2*(n-1));
        if (n == 1 || m==1 ) return n*m;
        return n + m - gcd(n, m) + (gcd(n, m) - 1)*2;
    }
    
    function  gcd(n, m){
        while (m) {
            let temp = n;
            n = m;
            m = temp%m;
        }
        
        return n;
    }

//  Alt 2
function countBlackCells(n, m) {
    var s;
    if (n > m) {
      s = n;
      n = m;
      m = s;
    }
    s = 0;
    var r = 0;
    var t = 0;
    for (var i = 0; i < n / gcd(m, n); i++) {
      t = m / n + r;
      s += Math.ceil(t);
      r = (t - 0.000001) % 1;
    }
    function gcd(a, b) {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    }
    return gcd(m, n) * s + (gcd(m, n) - 1) * 2;
  }
  
  
// Alt 3
function solution(n, m) {
    if (n > m) [n, m] = [m, n];
    
    let shaded = n + m - 1;
    
    for (let x = 1; x < m; x ++) {
        if ((n * x / m) % 1 === 0) shaded++;
    }
    
    return shaded;
}

// Alt 3
function solution(n, m) {

    y = x => x * n / m
    
    r=0
    for(i=0; i<m; i++) {
       r += Math.floor(y(i+1)+1) - Math.ceil(y(i)-1) 
    }
    
    return r -2
}


// Alt 4
function solution(n, m) {
    if(n === m && m>1){
      return (m-1)*3+1;
    }else if(n === m && m===1){
      return 1;
    }
    
    let sum =0;
    for(let i=1; i<=m; i++){
      //console.log("L")
     let x1 = i-1;
     let x2 = i;
    if(x2===m){
      sum+=Math.floor(n/m*x2)-Math.floor(n/m*x1)===0?1:Math.floor(n/m*x2)-Math.floor(n/m*x1);
    }else{
      if(n/m*x2===Math.floor(n/m*x2)){
        sum+=Math.floor(n/m*x2)-Math.floor(n/m*x1)+2;
      }else{
        sum+=Math.floor(n/m*x2)-Math.floor(n/m*x1)+1;
      }
    }
     }
   
  return sum;
  }
  
// Alt 5
function solution(n, m) {
    return n + m + gcd(n, m) - 2;
}

function gcd(a, b) {
    if (a === 1 || b === 1) return 1;
    if (a === 0) return b;
    if (a < b) {
        a = b + a;
        b = a - b;
        a = a - b;
    }
    
    return gcd(a % b, b);
}  

// Alt 6
function solution(n, m) {
    let result = n + m - 1;
    for(let x = 1; x < m ; x++){
        if((n * x / m) % 1 === 0) result++;
    }
    return result;
}

//  Alt 7
function solution(n, m) {
    return n+m+[...Array(n>m?n:m).keys()].map(i=>i+1).filter(i=>n%i==0&&m%i==0).slice(-1)[0]-2}