solution=(n)=> {
    let count = 0;
    let m = {};
    let arr=[];
     
// Find divisiors
    for (let i = 1; i <= n; i++) {
        m[i] = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) m[i]++;
        }
    }
    
// Find Weakness
    while (n > 0) {
        for (let l = n - 1; l > 0; l--) {
            if (m[n] < m[l]) count++;
        }
        arr.push(count);
        count=0;
        n--;
    }
     
// Find weakest and its quantity
    let weakness = Math.max(...arr);    
    for (let k in arr){
      if(weakness === arr[k]) count++;
    }
    return [weakness,count]
}


function numDivisors(num){
    let counter = 0;
    
    for(let div = 1; div <= num; div++){
        if(num % div === 0){
            counter ++;
        }
    }
    return counter
}

// Alt 2
const solution = n => {
    const arr1 = [...Array(n)].map((_, idx) => [...Array(++idx)].map((_, idx) => ++idx).reduce((pre, val) => pre + !(idx % val), 0));
    const arr2 = arr1.map((_, idx) => arr1.slice(0, idx).reduce((pre, val) => pre + (val > arr1[idx]), 0));
    return [Math.max(...arr2), arr2.reduce((pre, val) => pre + (val === Math.max(...arr2)), 0)];
  };

// Alt 3
function getWeakess(num){
    const divisors = numDivisors(num);
    let weakness = 0;
    
    for(let i = 1; i < num; i++){
        if(numDivisors(i) > divisors) weakness++;
    }
    return weakness;
}

let maxWeakness = 0;
let weakCount = 0;

for(let num = 1; num <= n; num++){
    const weakness = getWeakess(num);
    
    if(weakness === maxWeakness) weakCount++;
    
    if(weakness > maxWeakness){
        maxWeakness = weakness;
        weakCount = 1;
    }
}
return [maxWeakness, weakCount];