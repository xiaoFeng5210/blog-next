"use client"
import type { FC } from 'react'
import '~/styles/workList.scss'
import WorkCard from '~/components/works-card'
import {worksSetting} from '~/local/works-setting'

const WorkList: FC = () => {
  return (
    <main className=''>
      {
        worksSetting.map((item, index) => <WorkCard key={item.id} {...item} />)
      }
    </main>
  )
}
export default WorkList
