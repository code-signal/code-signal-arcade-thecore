function solution(commands) {
    let clock = {
      L: 1,
      R: 3,
      A: 2
    };
    let antiC = {
      R: 1,
      L: 3,
      A: 2
    };
    let clock_sum = 0;
    let antiC_sum = 0;
    let result = 0;
    for (let i = 0; i < commands.length; i++) {
      let cmd = commands[i];
      clock_sum = (clock_sum + clock[cmd]) % 4;
      antiC_sum = (antiC_sum + antiC[cmd]) % 4;
      if (clock_sum === antiC_sum) result++;
    }
    return result;
  }

// Alt 2
int solution(std::string commands) {
    int count = 0;
    int hear = 0;
    int deaf = 0;
    
    for (char c : commands) {
        switch (c) {
            case 'L':
                hear--;
                deaf++;
                break;
            case 'R':
                hear++;
                deaf--;
                break;
            case 'A':
                hear +=2;
                deaf +=2;
                break;
            default:
                std::cout << "Huh?" << std::endl;
                break;
        }
        
        hear = (hear + 4) % 4;
        deaf = (deaf + 4) % 4;
        
        if (hear == deaf)
            count++;
    }
    
    return count;
}

// Alt 3  
int solution(std::string commands) {
    int r = 0, p = 0;
    for (c : commands) {
        p ^= c != 'A';
        r += !p;
    }
    return r;
}

// Alt 4
int solution(std::string s) {
    using namespace std;
    int x = 0, ans = 0;
    for(int i = 0 ; i < s.size() ; i++){
         if( s[i] == 'L' ) x++;
         else if( s[i] == 'R' ) x--;
         if(x%2==0) ans++;
    }
    return ans;
}

// Alt 5
int m = 0, c = 0;
int solution(std::string s) {
	for (auto x : s) 
	{
		x == 'A' ? m += 2 : m++;
		m % 2 ? c += 0 : c++;
	}
	return c;
}
