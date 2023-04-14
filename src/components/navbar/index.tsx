"use client"
import { FC, useEffect, useRef, useState } from 'react'
import styles from './navbar.module.scss'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import SnackAlert from '../snackbar';
import type { SnackAlertMethods } from '../snackbar'

const NavBar: FC = () => {
  const snackAlertRef = useRef<SnackAlertMethods>(null)
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: ''
  })
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  }
  const changeName = (value: string) => {
    setForm({
      ...form,
      name: value
    })
  }
  const changeEmail = (value: string) => {
    setForm({
      ...form,
      email: value
    })
  }

  const login = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).catch((err) => {
      throw new Error(err)
    })
    if (response.ok) {
      const { token } = await response.json()
      if (token) {
        sessionStorage.setItem('token', token)
      } else {
        snackAlertRef.current?.handleOpen({ content: '登录失败', severity: 'error' })
      }
      handleClose()
    } else {
      snackAlertRef.current?.handleOpen({ content: '登录失败', severity: 'error' })
    }
  }

  return (
    <div className={styles.section}>

      <div className={styles.container}>
        <div className={styles.links}>
          <img className={styles.logo} src="/img/logo.png" alt="" />
          <ul className={styles.list}>
            {
              ['主页', '作品', '个人介绍'].map((item, index) => {
                return (
                  <li className={styles.list_item} key={index}>{item}</li>
                )
              })
            }
          </ul>
        </div>
        <div className={styles.icons}>
          {/* <img src="/img/search.png" alt="" /> */}
          <button onClick={() => handleOpen()}>登录</button>
        </div>
        <progress value='0' max='100' />
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>登录</DialogTitle>
        <DialogContent>
          <DialogContentText>
            个人博客，如果想要账号，请联系我804875728@qq.com
          </DialogContentText>
          <TextField
            required
            autoFocus
            onChange={(e) => changeEmail(e.target.value)}
            margin="dense"
            id="email"
            label="邮箱"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            onChange={(e) => changeName(e.target.value)}
            margin="dense"
            id="name"
            label="昵称"
            type="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={login}>登录</Button>
        </DialogActions>
        <SnackAlert ref={snackAlertRef} />
      </Dialog>

    </div>
  )
}
export default NavBar

