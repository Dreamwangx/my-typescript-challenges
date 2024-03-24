type MyParameters<T extends (...args: any[]) => any> =
 T extends (...args: infer X) => any ? X : never

function foo2(arg1: string, arg2: number): void {}
type cc = MyParameters<typeof foo2>