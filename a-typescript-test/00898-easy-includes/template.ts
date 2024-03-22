type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = 
 T extends [infer First,...infer Next] ? 
 Equal<First,U> extends true ?  true : 
    Includes<Next, U> 
 :false

 //type cc = Includes<[boolean, 2, 3, 5, 6, 7], false>
 
 // Equal 
 type cc2 = false extends boolean ? true : false

 type cc3 = boolean extends false  ? true : false

 type Equal2<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

  type Equal22<X, Y> =
  (<X>() => Y extends X ? 1 : 2) extends
  (<Y>() => X extends Y  ? 1 : 2) ? true : false

type Equal3<X, Y> =
  ( Y extends X ? 1 : 2) extends
  ( X extends Y ? 1 : 2) ? true : false

  type cc22 = Equal22<{ }, { a: 'A' }>

  type cc222 =  { a: 'A' } extends {}    ? true : false

/* 


declare let x: <T>() => T extends number ? 1 : 2
declare let y: <T>() => T extends number ? 1 : 2
declare let z: <T>() => T extends string ? 1 : 2

var str: string = '1'
str = 2 // 报错

x = 100 // 报错
x = y
x = z // 报错
y = z // 报错
 */