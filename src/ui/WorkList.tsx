"use client"
import type { FC } from 'react'
import '~/styles/workList.scss'
import WorkCard from '~/components/works-card'

const WorkList: FC = () => {
  return (
    <main className=''>
      <WorkCard />
      <WorkCard />
    </main>
  )
}
export default WorkList
