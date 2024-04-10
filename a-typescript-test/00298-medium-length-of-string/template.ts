// type LengthOfString<
//   S extends string,
//   Letters extends string[] = [],
// > = S extends ''
//   ? Letters['length']
//   : S extends `${infer _L}${infer R}`
//   ? LengthOfString<R, [...Letters, R]>
//   : never;

type LengthList<S extends string> = S extends `${infer F}${infer Rest}` ? [F, ...LengthList<Rest>] : []

type LengthOfString<S extends string> = LengthList<S>['length']

type cca = LengthList<'kumiko'>