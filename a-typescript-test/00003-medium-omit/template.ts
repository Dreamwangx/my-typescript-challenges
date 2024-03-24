type MyOmit<T, K extends keyof T> =  
{ 
    [P in Exclude<keyof T,K>] : T[P]
}

interface Todo {
    title: string
    description: string
    completed: boolean
  }

type CC  = MyOmit<Todo, 'description'>

type CC2 = Todo