import React from 'react'
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Record } from '../../types/types'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import {
  deleteRecord,
  toggleItemCompleted,
} from '../../store/records/recordsSlice'

interface RecordProps {
  record: Record
}

const RecordItem = ({ record }: RecordProps): React.ReactElement => {
  const dispatch = useAppDispatch()

  const handleToggleItemCompleted = (): void => {
    dispatch(toggleItemCompleted(record.id))
  }

  const onDeleteRecord = (): void => {
    dispatch(deleteRecord(record.id))
  }

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={onDeleteRecord}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton dense onClick={handleToggleItemCompleted}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={record.completed}
            tabIndex={-1}
            inputProps={{ 'aria-labelledby': String(record.id) }}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText id={String(record.id)} primary={record.text} />
      </ListItemButton>
    </ListItem>
  )
}

export default RecordItem
