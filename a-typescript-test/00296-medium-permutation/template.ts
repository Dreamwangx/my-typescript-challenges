type Permutation<T, U = T> = [ T ] extends [ never ]
? []
: (
  U extends T
    ? [ U, ...Permutation<Exclude<T, U>> ]
    : []
)
type cvcv =  Permutation<boolean>