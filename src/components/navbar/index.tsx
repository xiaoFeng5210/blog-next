"use client"

import { FC } from 'react'
import styles from './navbar.module.scss'
const NavBar: FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.links}>
          <img className={styles.logo} src="/img/logo.png" alt="" />
          <ul className={styles.list}>
            {
              ['Home', 'Studio', 'Works', 'Contact'].map((item, index) => {
                return (
                  <li className={styles.list_item} key={index}>{item}</li>
                )
              })
            }
          </ul>
        </div>
        <div className={styles.icons}>
          <img src="/img/search.png" alt="" />
          <button>Hire Now</button>
        </div>
      </div>
    </div>
  )
}
export default NavBar
