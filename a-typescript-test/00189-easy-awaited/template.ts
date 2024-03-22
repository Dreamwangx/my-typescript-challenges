//type MyAwaited<T> = T extends Promise<infer X> ? MyAwaited<X> : T

type MyAwaited<T extends PromiseLike<any>> = 
T extends PromiseLike<infer R> 
    ? R extends PromiseLike<any> 
        ? MyAwaited<R> : R
    : never

// 上面泛型约束 ,不是PromiseLike 类型提示报错
//type MyAwaited<T> = T extends PromiseLike<infer R> ? MyAwaited<R> : T