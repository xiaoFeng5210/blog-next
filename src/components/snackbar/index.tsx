'use client'
import { FC, useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
interface SnackbarState {
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'center' | 'right'
  open: boolean
  duration: number
}

const SnackAlert: FC = () => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    vertical: 'top',
    horizontal: 'center',
    open: false,
    duration: 6000
  })
  const handleClose = () => {
    setSnackbar({
      ...snackbar,
    })
  }
  const { vertical, horizontal, open } = snackbar
  return (
    <Snackbar
      autoHideDuration={6000}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message="I love snacks"
      key={vertical + horizontal}
    />
  )
}
export default SnackAlert
