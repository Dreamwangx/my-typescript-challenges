type Push<T extends unknown[], U> = T extends [...infer P] ? [
     ...P ,U
] :[U]
