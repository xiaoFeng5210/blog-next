import { FC } from 'react'
import styles from '../styles/common.module.scss'
import WhoStyles from '../styles/hero.module.scss'
import newStyles from '~/styles/who.module.scss'
import Image from 'next/image'


const Who: FC = () => {
  const works = [
    {
      title: 'vue3',
      desc: '使用vue3开发项目',
    }
  ]
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={newStyles.main}>
          <div className={WhoStyles.title}>What I do</div>
          <div className="w-10/12 h-auto border flex flex-col">
            {
              works.map((item, index) => {
                return (
                  <div key={index} className={newStyles.work_item}>

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Who
