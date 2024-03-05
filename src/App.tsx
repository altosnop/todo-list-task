/* eslint-disable @typescript-eslint/no-extra-parens */
import React from 'react'
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  List,
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  FormControl,
  Container,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Divider,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const App = (): React.ReactElement => {
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <Container maxWidth="xl">
      <TextField
        sx={{
          marginBottom: 5,
        }}
        fullWidth
        label="Record description"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained">Add</Button>
            </InputAdornment>
          ),
        }}
      />

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
          <Typography variant="subtitle1">Completed - 1</Typography>
          <Divider orientation="vertical" flexItem sx={{ margin: '3px 5px' }} />
          <Typography variant="subtitle1">Current - 3</Typography>
        </Box>
      </Box>

      <List sx={{ width: '100%' }}>
        {[0, 1, 2, 3].map(value => {
          const labelId = `checkbox-list-label-${value}`

          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, cupiditate?"
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}

export default App
