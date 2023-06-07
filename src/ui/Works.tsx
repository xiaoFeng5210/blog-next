"use client"
import { FC, useEffect } from 'react'
import styles from '../styles/common.module.scss'
import '../styles/works.scss'
import * as d3 from 'd3'
import { bubbleList } from '../local/baseData'

const Works: FC = () => {
  const d3viewBox = {
    width: 0,
    height: 0,

  }
  useEffect(() => {
    const { width, height } = getWidthAndHeight()
    d3viewBox.width = width
    d3viewBox.height = height
  }, [])
  const getWidthAndHeight = () => {
    const width = document.getElementById('d3_show_box')!.offsetWidth
    const height = document.getElementById('d3_show_box')!.offsetHeight
    return { width, height }
  }
  const drawBubble = () => {
    const COLOR = ['#4B0082', '#9932CC', '#9400D3', '#BA55D3']
    const values = bubbleList.map(item => item.value as number)
    const max = Math.max(...values)
    const min = Math.min(...values)
    const scale = d3.scaleLinear([min, max], [16, 40])
    const scaleFontSize = d3.scaleLinear([min, max], [20, 38])
    const scaleCategory = d3.scaleLinear([min, max], [0, COLOR.length - 1])
    const color = (value: number) => {
      return COLOR[Math.floor(scaleCategory(value))]
    }
  }
  return (
    <div className={styles.section}>
      <div className='works_box'>
        <div className='title'>擅长的领域</div>
        <div className="d3_box" id='d3_show_box'></div>
      </div>
    </div>
  )
}
export default Works
