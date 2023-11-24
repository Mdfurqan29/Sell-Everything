import React from 'react'
import {TextField } from '@mui/material'
const Input = ({placeholder , label , onChage , id,value}) => {
  return (
    <TextField value={value}  sx={{color:"blue"}} id={id} placeholder={placeholder} label={label} variant="standard" onChange={onChage}/>
  )
}

export default Input
