
type MyReturnType<T extends Function> = T extends (...args:any) => infer X ?  X : never;

const fnx = (v: boolean) => v ? 1 : 2

type asd = MyReturnType<typeof fnx>