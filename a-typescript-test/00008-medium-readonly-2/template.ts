// type MyReadonly2<T, K extends keyof T = keyof T> = {
//     [P in keyof Omit<T,K>] : T[P] 
// } & {
//     readonly [P in K] : T[P]
// }

//优化一下

type MyReadonly2<T, K extends keyof T = keyof T> = 
 Omit<T,K> &
 Readonly <Pick<T,K>>
