export interface Record {
  id: number
  text: string
  completed: boolean
}

export interface InitialState {
  items: Record[]
}
