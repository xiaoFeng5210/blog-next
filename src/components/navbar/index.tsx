import { FC } from 'react'
import styles from './navbar.module.scss'

const getNames = () => {
  return ['主页', '动效作品', '2d作品', '3d作品', '个人介绍']
}

const NavBar: FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.links}>
          <span className={styles.logo}>Aurora</span>
          <ul className={styles.list}>
            {
              getNames().map((item, index) => {
                return (
                  <li className={styles.list_item} key={index}>{item}</li>
                )
              })
            }
          </ul>
        </div>
        <progress value='0' max='100' />
      </div>
    </div>
  )
}
export default NavBar

