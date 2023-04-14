'use client'
import { FC, useState, forwardRef, useImperativeHandle } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface SnackbarState {
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'center' | 'right'
  open: boolean
  duration: number,
  content: string
  severity: 'success' | 'info' | 'warning' | 'error'
}

export interface SnackAlertMethods {
  handleClose: () => void
  handleOpen: (data: Partial<Omit<SnackbarState, 'open'>>) => void
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackAlert = forwardRef<SnackAlertMethods>(function (props, ref) {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    vertical: 'top',
    horizontal: 'center',
    open: false,
    duration: 6000,
    content: '',
    severity: 'success'
  })

  const handleClose = () => {
    setSnackbar({
      ...snackbar,
      open: false
    })
  }
  const handleOpen = (data: Partial<Omit<SnackbarState, 'open'>>) => {
    setSnackbar({
      ...snackbar,
      ...data,
      open: true,
    })
  }
  const { vertical, horizontal, open, severity, content } = snackbar

  useImperativeHandle(ref, () => ({
    handleClose,
    handleOpen
  }))
  return (
    <Snackbar
      autoHideDuration={snackbar.duration}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message="I love snacks"
      key={vertical + horizontal}
    >
      <Alert onClose={handleClose} severity={severity}>
        {content}
      </Alert>
    </Snackbar>
  )
})

SnackAlert.displayName = 'SnackAlert'

export default SnackAlert
