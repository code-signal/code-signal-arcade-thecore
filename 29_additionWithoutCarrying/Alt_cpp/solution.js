int solution(int a, int b) {
    int y = 0;
    int p = 1;
    for(; a || b; a /= 10, b /= 10, p *= 10)
        y += (a % 10 + b % 10) % 10 * p;
    return y;
}

// Alt 2
function solution(param1, param2) {
    param1 = String(param1);
    param2 = String(param2);
    var a = param1.length > param2.length ? param1 : param2;
    var b = param1.length > param2.length ? param2 : param1;
  
    b = ("00000" + b)
      .slice(-a.length)
      .split("")
      .map(item => Number(item));
    a = a.split("").map(Number);
  
    var c = a.map((el, i) => (el + b[i]) % 10);
    return Number(c.join(""));
  }

//  Alt 3
int solution(int param1, int param2) {
    int result =0;
    int kelipatan=1;
    while ( !(param1 %10 ==0 && param2 %10 ==0 ) ){
        result += kelipatan *( ((param1 % 10) + (param2 % 10)) % 10 ) ;
        param1 /=10, param2 /=10;
        kelipatan*=10;
    }
    return result;
}

//  Alt 4
int solution(int param1, int param2) {
	string st1 = std::to_string(param1);
	string st2 = std::to_string(param2);
	int i = st1.size() - 1, j = st2.size() - 1;
	string s = "";
	while (i >= 0 && j >= 0){
		int c = st1[i] + st2[j] - 96;
		if (c >= 10) c = c % 10;
		s.push_back(c + 48);
		i--; j--;
	}
	if (i >= 0){
		while (i >= 0){
			s.push_back(st1[i]);
			i--;
		}
	}
	if (j >= 0){
		while (j >= 0){
			s.push_back(st2[j]);
			j--;
		}
	}
	int sum = 0;
	for (int i = s.size() - 1; i >= 0; i--){
		sum += (s[i] - 48)*pow(10, i);
	}
	return sum;
}

// Alt 4
int solution(int param1, int param2) {
    int min = (param1 > param2)?(param2):(param1),
        max = (param1 < param2)?(param2):(param1),
        res = 0,
        i = 1;
    
    while(min > 0) {
        int _nMax = max % 10;
        int _nMin = min % 10;
        max /= 10;
        min /= 10;
        res += (_nMax+_nMin)%10 * i;
        i*=10;
    }
    res += max * i;


    return res;
}

//  Alt 5
int solution(int a, int b) {
    int r = 0;
    
    int t = 1;
    while(a+b!=0)
    {
        r += ((a % 10 + b % 10) % 10) * t;
        a /= 10;
        b /= 10;
        t *= 10;
    }
    
    return r;
}
