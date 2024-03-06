import { Record } from '../types/types'

const generateUniqueId = (todos: Record[]): number => {
  let newId
  const existingIds = todos.map(todo => todo.id)

  do {
    newId = Math.floor(Math.random() * 1000000)
  } while (existingIds.includes(newId))

  return newId
}

export default generateUniqueId
