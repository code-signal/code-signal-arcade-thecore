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

int num_divisor(int a)
{
    int b;
    int count = 0;
    for (b = 1; b <= a; b++)
    {
        if (a%b == 0) count++;
    }
    return count;
}

arr_integer solution(int n) {
    int a, b, temp = 0, count = 0;
    arr_integer x = alloc_arr_integer(2);
    int arr[1000] = { 0 };
    arr[0] = 1000;
    int weak[1000] = { 0 };
    for (a = 1; a <= n; a++)
    {
        arr[a] = num_divisor(a); // return the number of divisors of a
    }
    for (a = n; a > 0; a--)
    {
        for (b = 1; b < a; b++)
        {
            if (arr[a] < arr[b]) count++;
        }
        weak[a] = count;
        count = 0;
    }
    for (a = 1; a <= n; a++)
    {
        if (weak[a] > temp)
        {
            temp = weak[a];
            count = 1;
        }
        else if (weak[a] == temp) count++;
    }
    x.arr[0] = temp;
    x.arr[1] = count;
    return x;

}
