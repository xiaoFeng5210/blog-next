"use client"
import { FC, useEffect, useState } from 'react'
import styles from '../styles/common.module.scss'
import '../styles/works.scss'
import * as d3 from 'd3'
import { bubbleList, d3Tabs } from '../local/baseData'

const Works: FC = () => {
  const [selectKey, setSelectKey] = useState(0)
  const changeTab = (e: number) => {
    setSelectKey(e)
  }
  const [d3viewBox, setD3viewBox] = useState({ width: 0, height: 0 })
  useEffect(() => {
    const { width, height } = getWidthAndHeight() as { width: number, height: number }
    setD3viewBox({ width, height })
  }, [])
  const getWidthAndHeight = () => {
    const width = document.getElementById('d3_show_box')?.offsetWidth
    const height = document.getElementById('d3_show_box')?.offsetHeight
    return { width, height }
  }
  // const drawBubble = () => {
  //   const COLOR = ['#4B0082', '#9932CC', '#9400D3', '#BA55D3']
  //   const values = bubbleList.map(item => item.value as number)
  //   const max = Math.max(...values)
  //   const min = Math.min(...values)
  //   const scale = d3.scaleLinear([min, max], [16, 40])
  //   const scaleFontSize = d3.scaleLinear([min, max], [20, 38])
  //   const scaleCategory = d3.scaleLinear([min, max], [0, COLOR.length - 1])
  //   const color = (value: number) => {
  //     return COLOR[Math.floor(scaleCategory(value))]
  //   }
  // }
  return (
    <div className={styles.section}>
      <div className='works_box'>
        <div className='title'>擅长的领域</div>
        <div className="d3_box">
          <div className="tabs w-[100%] flex justify-center">
            <div className="tabs tabs-boxed">
              {
                d3Tabs.map((item, index) => {
                  return <a onClick={() => changeTab(item.key)} key={item.key} className={'tab ' + (selectKey === item.key ? 'tab-active' : '')}>{item.title}</a>
                })
              }
            </div>
          </div>

          {/* 显示内容 */}
          <div id='d3_show_box' className="d3_content w-[100%] h-[100%]">

          </div>
        </div>
      </div>
    </div>
  )
}
export default Works

