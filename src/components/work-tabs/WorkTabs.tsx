"use client"
import { FC, useState } from 'react'
import { WorksType } from '~/types'
interface Props {
  tabs: WorksType[]
  change: (tab: WorksType) => void
}
const WorkTabs: FC<Props> = ({ tabs, change}) => {
  const [selectTab, setTab] = useState(tabs[0])
  const switchTab = (tab: WorksType) => {
    change(tab)
    setTab(tab)
  }
  return (
    <div className="tabs">
      {
        tabs.map((item, index) => <a key={index} className={'tab ' + (selectTab === item && 'tab-active')} onClick={() => switchTab(item)}>{item}</a>)
      }
    </div>
  )
}
export default WorkTabs
