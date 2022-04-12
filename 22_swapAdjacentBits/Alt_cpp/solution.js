int solution(int n) {
    return (n & 0x55555555) << 1 | (n & 0xAAAAAAAA) >> 1;
  }

// Alt 2
int solution(int n) {
    return [=]
      {
          string s = bitset<32>(n).to_string();
          cout << s << endl;
          int temp;
  
          for (int i = 0; i < s.length(); i += 2)
          {
              temp = s[i];
              s[i] = s[i + 1];
              s[i + 1] = temp;
          }
  
          cout << s << endl;
          int number = stoi(s, nullptr, 2);
  
          return number;
      }() ;
  }
  