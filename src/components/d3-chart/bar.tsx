"use client"
import d3 from 'd3'
import { FC } from 'react'
import { d3BarList } from '../../local/baseData'
interface Props {
  d3viewBox: { width: number, height: number }
  index: number
}
const component: FC<Props> = (props) => {
  const { d3viewBox, index } = props
  const drawBars = () => {
    const { width, height } = d3viewBox
    const svg = d3.select(`#d3_show_chart${index}`)
      .append('svg').attr('width', width).attr('height', height)
    const padding = { top: 20, right: 30, bottom: 20, left: 30 }
    const dataset = d3BarList.map(item => item.value as number)
    const xScale = d3.scaleBand().domain(d3BarList.map(item => item.name)).range([0, width - padding.left - padding.right])
    const yScale = d3.scaleLinear().domain([0, d3.max(dataset) as number])
      .range([height - padding.top - padding.bottom, 0])
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)
    const rects = svg.selectAll('rect').data(dataset).enter().append('rect')
      .attr('class', "MyRect").attr('transform', `translate(${padding.left},${padding.top})`)
      .attr('x', (d, i) => xScale(d3BarList[i].name) as number).attr('y', d => yScale(d) as number)
  }
  return (
    <div id={`d3_show_chart${index}`} className="d3_show_chart w-[100%] h-[100%]" />
  )
}
export default component
