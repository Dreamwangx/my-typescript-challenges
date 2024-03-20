import { type } from "os"

type arr = [1, 2, 3, 4]
type ReverArr<T extends any[]> = T extends [infer fir, ...infer red] ? [...ReverArr<red>, fir] : T

type Arr = ReverArr<arr>

type obj = {
    asd: number,
    arw: string
}

type obj1 = {
    asd: 1,
    arw: '123'
}
enum Name {
    red = 'red'
}
const arr: (string | boolean)[] = [false, '1']

interface User {
    name: string
    age: number
}

type Pa<T> = {
    [p in keyof T]?: T[p]
}
type c = Pa<User>