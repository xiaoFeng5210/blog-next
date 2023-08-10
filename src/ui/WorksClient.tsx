"use client"
import { FC, useEffect, useState } from 'react'
import WorkList from '~/ui/WorkList'
import '~/app/works/works.scss'
import { worksSetting } from '~/local/works-setting'
import WorkTabs from '~/components/work-tabs/WorkTabs'
import { WorksSettings, WorksType } from '~/types'

const WorksClient: FC = () => {
  const tabs = getTabs()
  const [currentTab, setCurrentTab] = useState(tabs[0])
  const [currents, setCurrents] = useState<WorksSettings[]>([])
  const changeCurrent = (tab: WorksType) => {
    setCurrentTab(tab)
  }
  function getTabs() {
    return [...new Set(worksSetting.map(item => item.type))]
  }
  useEffect(() => {
    setCurrents(worksSetting.filter(item => item.type === currentTab))
  }, [currentTab])

  return (
    <div className='p-20px'>
      <header className='flex-inline justify-center text-center pt-[50px] pb-4'>
        <h1 className='text-[34px] pb-4 header_title'>作品展示</h1>
        <p>以下项目均由本人开发，均可自由使用，部分开源。</p>
        {/* <button className="btn btn-neutral mt-4"><a href="https://github.com/xiaoFeng5210" target="_blank" rel="noreferrer">前往github</a></button> */}
        <WorkTabs tabs={tabs} change={changeCurrent} />
      </header>
      <WorkList currents={currents} />
    </div>
  )
}
export default WorksClient
