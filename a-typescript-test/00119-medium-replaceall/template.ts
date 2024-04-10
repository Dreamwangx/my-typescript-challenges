type ReplaceAll<S extends string, From extends string, To extends string> = 
From extends '' ? S :
S extends `${infer Rest}${From}${infer Rest2}`  ? 
`${Rest}${To}${ReplaceAll<Rest2,From,To>}`
 : S

 type re = ReplaceAll<'t y p e s', ' ', ''>