/* eslint-disable @typescript-eslint/no-extra-parens */
import { Button, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addRecord } from '../../store/records/recordsSlice'

const AddInput = (): React.ReactElement => {
  const dispatch = useAppDispatch()

  const [record, setRecord] = useState<string>('')
  const [recordError, setRecordError] = useState<boolean>(false)

  const isValidRecord = (record: string): boolean => {
    if (record.trim().length > 0 && record.trim().length <= 20) {
      return true
    } else {
      return false
    }
  }

  const validateRecord = (record: string): void => {
    if (isValidRecord(record)) {
      setRecordError(false)
    } else {
      setRecordError(true)
    }
  }

  const onRecordInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setRecord(event.currentTarget.value)
    validateRecord(event.currentTarget.value)
  }

  const onAddRecord = (event: React.SyntheticEvent): void => {
    event.preventDefault()

    dispatch(addRecord(record))
    setRecord('')
  }

  return (
    <form onSubmit={onAddRecord}>
      <TextField
        sx={{
          marginBottom: 5,
        }}
        fullWidth
        value={record}
        onChange={onRecordInputChange}
        error={recordError}
        helperText={
          recordError
            ? 'Record should be less than or equal to 20 characters'
            : ''
        }
        label="Record description"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" type="submit" disabled={recordError}>
                Add
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </form>
  )
}

export default AddInput
