type Flatten<T extends any[]> = 
  T extends [infer F,...infer Rest] ?  
  F extends [...infer Rest2] ? [...Flatten<Rest2>, ...Flatten<Rest>] : [F, ...Flatten<Rest>] 
   : []