function increaseNumberRoundness(n) {
    return (
      String(
        Number(
          String(n)
            .split("")
            .reverse()
            .join("")
        )
      ).indexOf("0") >= 0
    );
  }

//  Alt 2
function solution(n) {
    var check = false;
    
    while(n) {
        var digit = n%10;
        if (digit) check = true;
        if (digit == 0 && check) return true;
        n = (n - digit)/10;
    }
    
    return false;
}

// Alt 3
function solution(n) {
    
    const parts = n.toString().split('').reverse();
    let state = false;
    for(let part of parts) {
        if(part !== '0') state = true;
        else if(state && part === '0') {return true;}
    }
    return false;
}

// Alt 4
function solution(n) {
    return /0[1-9]/.test(n.toString());
}

//  Alt 5
function solution(n) {
    let str = String(n);
    let reverseStr = '';
    for (let i = str.length-1; i >= 0; i--)
        reverseStr += str[i];
    
    let pos = reverseStr.match(/[1-9]/);       
    let temp = reverseStr.slice(pos.index + 1);    
    let pos_zero = temp.match(/[0]/)
    
    return pos_zero ? true : false;
}

// Alt 6
function solution(n) {
    return(n.toString().match(/0[1-9]/)!==null)
   }

// Alt 7
function solution(n) {
    while (n) {
      if (n % 10 != 0) break;
      n = Math.floor(n / 10);
    }
    while (n) {
      if (n % 10 == 0) return true;
      n = Math.floor(n / 10);
    }
    return false;
  }
  
// Alt 8
function solution(n) {
    let str = String(n);
    let reverseStr = '';
    for (let i = str.length-1; i >= 0; i--)
        reverseStr += str[i];
    
    let pos = reverseStr.match(/[1-9]/);       
    let temp = reverseStr.slice(pos.index + 1);    
    let pos_zero = temp.match(/[0]/)
    
    return pos_zero ? true : false;
}
