
//type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

//type First<T extends any[]> = T extends [] ? never : T[0] 

type First<T extends any[]> = T extends [infer FirstItem,... infer Rest] ? FirstItem : never 

// 1.用 extends 去判断是否符合  
// 2.获取数组长度 T["length"]
// 3.[][number] 为 never
// 4.用 infer解构数组

 type Arr =  [];
//type t1 = Arr[number] extends never ? never :  Arr

// type t2 = [1] extends [infer FirstItem,...infer Arx] ? FirstItem : never 