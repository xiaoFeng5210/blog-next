"use client"
import { FC, useState } from 'react'
import styles from '../styles/common.module.scss'
import WhoStyles from '../styles/hero.module.scss'
import newStyles from '~/styles/who.module.scss'
import { worksLocale } from '~/local/baseData'
import type { NextPage } from 'next/types'

interface WorkContentProps {
  title: string
  desc: string
  image?: string
}

const WorkContent: FC<WorkContentProps> = ({ title, desc }) => {
  return (
    <div className={newStyles.work_item_content}>
      <div className={newStyles.work_item_title}>{title}</div>
      <div className={newStyles.work_item_desc}>{desc}</div>
    </div>
  )
}

const Who: NextPage = () => {
  const [works] = useState(worksLocale)
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={newStyles.main}>
          <div className={WhoStyles.title}>What I do</div>
          <div className="w-10/12 h-auto border flex flex-col">
            {
              works.map((item, index) => {
                return (
                  <div key={index} style={{ backgroundImage: `url('${item.image}')` }} className={newStyles.work_item}>
                    <WorkContent {...item} />
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
