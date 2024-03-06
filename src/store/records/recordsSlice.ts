import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialState, Record } from '../../types/types'

const generateUniqueId = (todos: Record[]): number => {
  let newId
  const existingIds = todos.map(todo => todo.id)

  do {
    newId = Math.floor(Math.random() * 1000000)
  } while (existingIds.includes(newId))

  return newId
}

const initialState: InitialState = {
  items: [],
}

const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<string>) => {
      if (action.payload.trim().length > 0) {
        const record: Record = {
          id: generateUniqueId(state.items),
          text: action.payload,
          completed: false,
        }

        state.items.push(record)
      }
    },
    deleteRecord: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(record => record.id !== action.payload)
    },
    toggleItemCompleted: (state, action: PayloadAction<number>) => {
      state.items = state.items.map(record =>
        record.id === action.payload
          ? { ...record, completed: !record.completed }
          : record,
      )
    },
  },
})

export const { addRecord, deleteRecord, toggleItemCompleted } =
  recordsSlice.actions
export default recordsSlice.reducer
