function solution(a, b) {
  let result = 0;    
  
  let l_a =  a/(2*Math.sqrt(2));
  let l_b =  b/(2*Math.sqrt(2));        
  console.log('00:', l_a, l_b);
  
  l_a =  2*Math.floor(l_a) + 1;
  l_b =  2*Math.floor(l_b) + 1;        
  console.log('0:', l_a, l_b);
  
  result += l_a * l_b;
  
  l_a =  (a - Math.sqrt(2)) / (2*Math.sqrt(2))
  l_b =  (b - Math.sqrt(2)) / (2*Math.sqrt(2))    
  console.log('11:', l_a, l_b);
      
  l_a =  2*(Math.floor(l_a) + 1) ;
  l_b =  2*(Math.floor(l_b) + 1) ;
  console.log('1:',l_a, l_b)  
  
  result += l_a * l_b;
      
  return result;
}
