"use client"
import { FC, useEffect } from 'react'
import '~/styles/workList.scss'
import WorkCard from '~/components/works-card'
import {worksSetting} from '~/local/works-setting'
import { WorksSettings } from '~/types'

interface Props {
  currents: WorksSettings[]
}
const WorkList: FC<Props> = ({currents}) => {
  
  return (
    <div className='main_list'>
      {
        currents.map((item) => <WorkCard key={item.id} {...item} />)
      }
    </div>
  )
}
export default WorkList
