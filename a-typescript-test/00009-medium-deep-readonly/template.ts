type Primary = string | number | boolean | Function;

type DeepReadonly<T> = {
   // readonly [P in keyof T] :  T[P] extends Primary ? T[P] :DeepReadonly<T[P]> 
   //  readonly [P in keyof T] :  T[P] extends object ? DeepReadonly<T[P]> : T[P]
   readonly [P in keyof T] : keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>   
}

type X1d = {
    a: () => 22
    b: string
    c: {
      d: boolean
      e: {
        g: {
          h: {
            i: true
            j: 'string'
          }
          k: 'hello'
        }
        l: [
          'hi',
          {
            m: ['hey']
          },
        ]
      }
    }
  }

type c1 = DeepReadonly<X1d>