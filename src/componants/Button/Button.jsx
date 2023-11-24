import React from 'react'
import Button from '@mui/material/Button';

const Butto = ({label,onClick ,sx}) => {
  return (
    <Button variant="contained"sx={sx} onClick={onClick}>{label}</Button>
  )
}

export default Butto
