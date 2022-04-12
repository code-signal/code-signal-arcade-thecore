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
arr_integer solution(int lastNumDays) {
    arr_integer a;
    
    if (lastNumDays == 28 || lastNumDays == 30)  {
        a = alloc_arr_integer(1);
        *a.arr = 31;
    } else {
        a = alloc_arr_integer(3);
        *a.arr = 28;
        *(a.arr + 1) = 30;
        *(a.arr + 2) = 31;
    }
    return a;
}
