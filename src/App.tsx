import React, { ChangeEvent, ReactElement, useState } from 'react'
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
} from '@mui/material'
import AddInput from './components/AddInput/AddInput'
import RecordItem from './components/RecordItem/RecordItem'
import { useAppSelector } from './service/useAppSelector'
import { recordsSelector } from './store/records/recordsSelectors'
import RecordsCounter from './components/RecordsCounter/RecordsCounter'

const App = (): ReactElement => {
  const [filterValue, setFilterValue] = useState<string>('all')

  const records = useAppSelector(recordsSelector)

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(event.target.value)
  }

  const filteredRecords =
    filterValue === 'all'
      ? records
      : filterValue === 'current'
        ? records.filter(record => !record.completed)
        : records.filter(record => record.completed)

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
          <RadioGroup row value={filterValue} onChange={handleFilterChange}>
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
        <RecordsCounter />
      </Box>

      <List sx={{ width: '100%' }}>
        {records.length ? 
          filteredRecords.map(record => {
            return <RecordItem key={record.id} record={record} />
          })
          : 
          <Typography
            variant="subtitle1"
            sx={{ color: 'gray', fontStyle: 'italic' }}
          >
            Add records to display
          </Typography>
        }
      </List>
    </Container>
  )
}

export default App
