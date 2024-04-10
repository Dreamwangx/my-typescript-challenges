type Merge<F, S> = {
    [B in ( keyof F | keyof S) ] : B extends keyof S ? S[B]:  B extends keyof F ?  F[B]  : never
}

type Foo = {
    a: number
    b: string
  }
  type Bar = {
    b: number
    c: boolean
  }
type  asdsad = Merge<Foo, Bar>