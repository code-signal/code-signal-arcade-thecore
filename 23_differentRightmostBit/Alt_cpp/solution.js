int solution(int n, int m) {
    return n ^= m, n & -n;
  }
  
//  Alt 2
int solution(int n, int m) {
    return (n^m)&-(n^m);
  }

// Alt 3
int solution(int n, int m) {
    return [=] {
          string strn, strm;
          int index = 0, position;
          strn = bitset<32>(n).to_string();
          strm = bitset<32>(m).to_string();
          //cout << strn << endl;
          //cout << strm << endl;
  
          for (int i = 31; i >= 0; i--)
          {
  
  
              if (strn[i] != strm[i])
                  break;
  
              index++;
  
          }
  
  
          position = pow(2, index);
  
          return position;
      }(); ;
  }
  