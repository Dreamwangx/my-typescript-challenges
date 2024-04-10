type Space = ' ' | '\n' | '\t'
type Trim<T extends string> = T extends `${infer S}${Space}`
    ? Trim<S>
    : T extends `${Space}${infer S}`
    ? Trim<S>
    : T