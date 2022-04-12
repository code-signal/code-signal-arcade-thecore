function magicalWell(a, b, n) {
    return (
      a * b * n + ((a + b) * ((n - 1) * n)) / 2 + ((n - 1) * n * (2 * n - 1)) / 6
    );
  }

  
// Alt 2
solution = (a,b,n) => n*(a*b+(n-1)*(2*n-1+3*(a+b))/6);  

// Alt 3
function solution(a, b, n) {
    return n!=0?[...Array(n).keys()].map(i=>(a+i)*(b+i)).reduce((x,y)=>x+y):0}

//  Alt 4
function solution(a, b, n) {
    var sum = 0;
    while (n > 0) {
        sum += (a++ * b++);
        n--;
    }
    return sum;
}
