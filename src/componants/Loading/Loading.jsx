import { Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react'

const Loading = () => {
  return (
    <Stack justifyContent="center" alignItems="center" width="100%" height="100vh">
    <CircularProgress/>
</Stack>
  )
}

export default Loading;
