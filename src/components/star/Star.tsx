import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star'
import React from 'react'

const labels: { [index: number]: string } = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0'
}

function getLabelText (value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
}
const Star = () => {
  const [value, setValue] = React.useState(0)
  const [hover, setHover] = React.useState(-1)
  return (
    <div>
      <Box
        sx={{ width: 200, display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <Rating
          sx={{ fontSize: '30px' }}
          name='hover-feedback'
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(_, newValue) => {
            if (newValue !== null) {
              setValue(newValue)
            }
          }}
          onChangeActive={(_, newHover) => {
            setHover(newHover)
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: '30px' }} />}
        />
        {value !== null && (
          <Box
            sx={{
              fontSize: '30px',
              fontFamily: 'monospace',
              fontWeight: 'bold'
            }}
          >
            {labels[hover !== -1 ? hover : value]}
          </Box>
        )}
      </Box>
    </div>
  )
}

export default Star
