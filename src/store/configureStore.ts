import { configureStore } from '@reduxjs/toolkit'
import recordsSlice from './records/recordsSlice'

const store = configureStore({
  reducer: {
    records: recordsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
