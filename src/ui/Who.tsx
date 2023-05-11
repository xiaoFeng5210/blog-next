import { FC } from 'react'
import styles from '../styles/common.module.scss'
import WhoStyles from '../styles/hero.module.scss'

const Who: FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={WhoStyles.left}>
          <span className='font-bold text-2xl'>What I do</span>
        </div>
      </div>
    </div>
  )
}
export default Who
