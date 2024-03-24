type Chainable<T = {}> = {
  // option:<K extends string, V>(
  //   key: K extends keyof T ?  V extends T[K] ? never : K  : K,
  //   value: V
  //   ) =>
  //   Chainable<Omit<T,K> & Record<K,V>>
    option<K extends  string, V>
    (key: K extends keyof T ? never : K, value: V): 
    Chainable<Omit<T, K> & Record<K, V>>
  get:()=> T
}

//record 约束对象的key和value
 
type Key = "c" | "x" | "k";
 
type Value = '唱' | '跳'  | 'rap' | '篮球'
 
let obj:Record<Key,Value> = {
    'c':'篮球',
    "x":'篮球',
   // "x":'篮球',
    "k":'rap'
}