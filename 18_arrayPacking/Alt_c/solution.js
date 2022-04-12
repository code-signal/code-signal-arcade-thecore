// Definition for arrays:
// typedef struct arr_##name {
//   int size;
//   type *arr;
// } arr_##name;
//
// arr_##name alloc_arr_##name(int len) {
//   arr_##name a = {len, len > 0 ? malloc(sizeof(type) * len) : NULL};
//   return a;
// }
//
//
int solution(arr_integer a) {
    int c = 0;
    for(int i=a.size-1; i>=0; i--){
        c |= (a.arr[i]<<8*i);    
    }
    return c;
}


// Alt 2
function solution(a) {
	while (a.length < 4)
		a.push(0);
	return a[3] << 24 | a[2] << 16 | a[1] << 8 | a[0];
}


// Definition for arrays:
// typedef struct arr_##name {
//   int size;
//   type *arr;
// } arr_##name;
//
// arr_##name alloc_arr_##name(int len) {
//   arr_##name a = {len, len > 0 ? malloc(sizeof(type) * len) : NULL};
//   return a;
// }
//
//
int solution(arr_integer a) {
    int i, m;
    m = 0;
    
    for (i = a.size - 1; i >= 1; --i) {
        printf("%i,", *(a.arr + i));
        m |= *(a.arr + i);
        m = m << 8;
    }
    m |= *a.arr;
    return m;
}

// Definition for arrays:
// typedef struct arr_##name {
//   int size;
//   type *arr;
// } arr_##name;
//
// arr_##name alloc_arr_##name(int len) {
//   arr_##name a = {len, len > 0 ? malloc(sizeof(type) * len) : NULL};
//   return a;
// }
//
//
int solution(arr_integer a) 
{
    int i, res = 0;
    for(i = 0; i < a.size; i+=1)
    {
        res += a.arr[i] << 8 * i;
    }
    return res;
}
