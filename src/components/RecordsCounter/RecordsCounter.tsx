import React, { ReactElement } from 'react'
import { Box, Typography, Divider } from '@mui/material'
import { useAppSelector } from '../../service/useAppSelector'
import {
  completedCountSelector,
  notCompletedCountSelector,
} from '../../store/records/recordsSelectors'

const RecordsCounter = (): ReactElement => {
  const completedCount = useAppSelector(completedCountSelector)
  const notCompletedCount = useAppSelector(notCompletedCountSelector)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        padding: 1,
      }}
    >
      <Typography variant="subtitle1">Completed - {completedCount}</Typography>
      <Divider orientation="vertical" flexItem sx={{ margin: '3px 5px' }} />
      <Typography variant="subtitle1">Current - {notCompletedCount}</Typography>
    </Box>
  )
}

export default RecordsCounter
