"use client"
import * as d3 from 'd3'
import { FC, useEffect } from 'react'
import { d3BarList } from '../../local/baseData'
interface Props {
  d3viewBox: { width: number, height: number }
  index: number
}
const Bar: FC<Props> = (props) => {
  const { d3viewBox, index } = props
  useEffect(() => {
    drawBars()
  }, [d3viewBox, index])
  const drawBars = () => {
    const { width, height } = d3viewBox
    const svg = d3.select(`#d3_show_chart${index}`)
      .append('svg').attr('width', width).attr('height', height)
    const padding = { top: 20, right: 50, bottom: 200, left: 50 }
    const dataset = d3BarList.map(item => item.value as number)
    const xScale = d3.scaleBand().domain(d3BarList.map(item => item.name)).range([0, width - padding.left - padding.right])
    const yScale = d3.scaleLinear().domain([0, d3.max(dataset) as number])
      .range([height - padding.top - padding.bottom, 0])
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)
    // 添加x y轴
    svg.append('g').attr('class', 'axis').attr('transform', `translate(${padding.left},${height - padding.bottom})`).call(xAxis)
    svg.append('g').attr('class', 'axis').attr('transform', `translate(${padding.left},${padding.top})`).call(yAxis)
    const rects = svg.selectAll('rect').data(dataset).enter().append('rect')
      .attr('class', (d, i) => `my_rect${i}`).attr('transform', `translate(${padding.left + 20},${padding.top})`)
      .attr('x', (d, i) => xScale(d3BarList[i].name) as number).attr('y', d => yScale(d) as number)
      .attr('width', Math.abs(xScale.bandwidth() - 50)).attr('height', d => Math.abs(height - padding.top - padding.bottom - yScale(d)))
      .attr('fill', '#69A2B2');
    // 添加文字
    svg.selectAll('.MyText').data(dataset).enter().append('text').attr('class', 'MyText')
      .attr('transform', `translate(${padding.left + 20},${padding.top})`)
      .attr('x', (d, i) => xScale(d3BarList[i].name) as number + Math.abs(xScale.bandwidth()) / 2)
      .attr('y', d => yScale(d) as number)
      .attr('dx', () => (Math.abs(xScale.bandwidth()) / 2) - 40)
      .attr('dy', () => 40)
      .text(d => d)
      .attr('fill', 'red')
  }
  return (
    <div id={`d3_show_chart${index}`} className="d3_show_chart w-[100%] h-[100%]" />
  )
}
export default Bar
