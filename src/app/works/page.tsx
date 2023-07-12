"use client"
import type { NextPage } from 'next'
import WorkList from '~/ui/WorkList'
import './works.scss'
import { worksSetting } from '~/local/works-setting'
import WorkTabs from '~/components/work-tabs/WorkTabs'
import { WorksType } from '~/types'
import { useState } from 'react'

async function getTabs() {
  const tabs = worksSetting.map(item => item.type)
  return tabs
}

const WorkPage = async () => {
  const tabs = await getTabs()
  const [currentTab, setCurrentTab] = useState(tabs[0])
  const changeCurrent = (tab: WorksType) => {
    setCurrentTab(tab)
  }
  return (
    <div className='p-20px'>
      <header className='flex-inline justify-center text-center pt-[50px] pb-4'>
        <h1 className='text-[34px] pb-4 header_title'>作品展示</h1>
        <p>以下项目均由本人开发，均可自由使用，部分开源。</p>
        {/* <button className="btn btn-neutral mt-4"><a href="https://github.com/xiaoFeng5210" target="_blank" rel="noreferrer">前往github</a></button> */}
        <WorkTabs tabs={tabs} change={changeCurrent} />
      </header>
      <WorkList />
    </div>
  )
}
export default WorkPage
