function lineUp(commands) {
    var c = {
      L: 1,
      R: 3,
      A: 2
    };
    var d = {
      R: 1,
      L: 3,
      A: 2
    };
    var e = 0;
    var f = 0;
    var ret = 0;
    for (var i = 0; i < commands.length; i++) {
      var cmd = commands[i];
      e = (e + c[cmd]) % 4;
      f = (f + d[cmd]) % 4;
      if (e === f) ret++;
    }
    return ret;
  }

//  Alt 2
function solution(commands) {
    var x = 0;
    var y = 0;
    var sum = 0;
    commands.split('').forEach((command, i) => {
        switch (command) {
           case 'A':
                x += 180;
                y += 180;
               break;
           case 'L':
                x += 90;
                y -= 90;
               break;
           case 'R':
                x -= 90;
                y += 90;
               break;
        }
        if (x < 0) x += 360;
        if (y < 0) y += 360;
        x %= 360;
        y %= 360;
        if (x === y) sum++;
        
    });
    return sum;
}


//  Alt 3
function solution(commands) {
    const weight = {
        'L': 1,
        'R': 1,
        'A': 2,
    };
    
    let halfSpin = false;
    
    return parseInt( commands.split('').reduce((p, c) => {
        if (c === 'L' || c === 'R') halfSpin = !halfSpin;
        return halfSpin && c === 'A' ? p : p + weight[c];
    }, 0) / 2 );
}

// Alt 4
const solution = (commands, flag = true) =>
  [...commands].reduce((pre, val) => pre + (flag = val !== `A` ? !flag : flag), 0);  

// Alt 5
solution = c => { var a=0,b=0; for(i in c) if( (a+={'L':1,'A':2,'R':3}[c[i]])%2<1 ) b++; return b; }  

// Alt 6
function solution(commands) {
    c = 0, s = true
    for (i of commands) {
        if (i == "L" || i == "R") {
            if (s) {s = false}
            else {
                c++
                s = true}}
        else if (s) {c++}}
    return c}  

//  Alt 7
function solution(commands) {
    let pos = 0,c=0;
    commands.split('').map(a=>{
        switch(a) {
               case 'A':
               pos+=180;
               break;
               case 'L':
               pos+=90;
               break;
               case 'R':
               pos-=90;
               break;
        }
        pos%=180;
        if(Math.abs(pos)===0)        
            c++;
    });
    return c;
}
