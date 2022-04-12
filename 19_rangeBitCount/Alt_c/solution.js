function solution(a, b) {

	var ret = 0;
	for (var i = a; i <= b; i++) {
		ret += [0, 1, 2, 3].reduce((acc, d) => acc + ((i & 1 << d) >> d), 0);
	}
	return ret;
}

//Alt 2
int solution(int a, int b) 
{
    int i, j, counter = 0;
    int maxBits = 4;
    for(i = a; i <= b; ++i)
    {
        for(j = 0; j <= maxBits; j++)
        {
            if((i & (1 << j) ) != 0)
                ++counter;
        }
    }
    return counter;
}

