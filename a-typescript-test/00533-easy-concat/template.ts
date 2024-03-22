type Concat< T extends  readonly [ ...any], U extends readonly [...any]> = [
    ...T,...U
]
type Concat2< T extends  readonly unknown[], U extends readonly unknown[]> = [
    ...T,...U
]
type c = Concat<[1], [1,3]>