import { FC } from 'react'
import styles from '~/styles/common.module.scss'
import NavBar from '~/components/navbar'

const Hero: FC = () => {
  return (
    <div className={styles.section}>
      <NavBar />
    </div>
  )
}
export default Hero
