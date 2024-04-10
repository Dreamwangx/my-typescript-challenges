type Replace<S extends string, From extends string, To extends string> =
From extends '' ? S :
S extends `${infer Rest}${From}${infer Rest2}`  ? 
`${Rest}${To}${Rest2}` : S

type cv = Replace<'foobarbar', '', 'foo'> 