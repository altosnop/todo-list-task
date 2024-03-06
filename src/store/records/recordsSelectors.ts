import { Record } from '../../types/types'
import { RootState } from '../configureStore'

export const recordsSelector = (state: RootState): Record[] =>
  state.records.items

export const completedCountSelector = (state: RootState): number => {
  const records = recordsSelector(state)
  const completedCount = records.filter(record => record.completed).length
  return completedCount
}

export const notCompletedCountSelector = (state: RootState): number => {
  const records = recordsSelector(state)
  const notCompletedCount = records.filter(record => !record.completed).length
  return notCompletedCount
}
