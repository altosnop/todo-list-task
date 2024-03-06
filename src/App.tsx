/* eslint-disable @typescript-eslint/no-extra-parens */
import React from 'react'
import {
  Box,
  List,
  FormControl,
  Container,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Divider,
} from '@mui/material'
import AddInput from './components/AddInput/AddInput'
import RecordItem from './components/RecordItem/RecordItem'
import { useAppSelector } from './hooks/useAppSelector'
import {
  completedCountSelector,
  notCompletedCountSelector,
  recordsSelector,
} from './store/records/recordsSelectors'

const App = (): React.ReactElement => {
  const records = useAppSelector(recordsSelector)
  const completedCount = useAppSelector(completedCountSelector)
  const notCompletedCount = useAppSelector(notCompletedCountSelector)

  return (
    <Container maxWidth="xl">
      <AddInput />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 2,
        }}
      >
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Filter</FormLabel>
          <RadioGroup row>
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="current"
              control={<Radio />}
              label="Current"
            />
            <FormControlLabel
              value="completed"
              control={<Radio />}
              label="Completed"
            />
          </RadioGroup>
        </FormControl>

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
          <Typography variant="subtitle1">
            Completed - {completedCount}
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ margin: '3px 5px' }} />
          <Typography variant="subtitle1">
            Current - {notCompletedCount}
          </Typography>
        </Box>
      </Box>

      <List sx={{ width: '100%' }}>
        {records.length ? (
          records.map(record => {
            return <RecordItem key={record.id} record={record} />
          })
        ) : (
          <Typography
            variant="subtitle1"
            sx={{ color: 'gray', fontStyle: 'italic' }}
          >
            Add records to display
          </Typography>
        )}
      </List>
    </Container>
  )
}

export default App
