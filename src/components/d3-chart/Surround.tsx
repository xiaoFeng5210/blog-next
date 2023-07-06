"use client"
import type { FC } from 'react'
import { randomNum } from '../../utils/help'
import { homepageSurround } from '../../local/baseData'
import "./surround.scss"

interface Props {
  d3viewBox: { width: number, height: number }
  index: number
}
const Surround: FC<Props> = (props) => {
  const { width, height } = props.d3viewBox
  const surroundBoxStyles = () => ({
    ['--margin-top']: `${randomNum(-50, 40)}vh`,
    ['--margin-left']: `${randomNum(8, 30)}vw`,
    ['--animation-duration']: `${randomNum(6, 30)}s`,
    ['--animation-delay']: `${randomNum(-20, 0)}s`,
  } as any) 
  function randomColor() {
    return `rgb(${randomNum(0, 255)},${randomNum(0, 255)},${randomNum(0, 255)})`
  }
  return (
    <div className='demo p-[20px]'>
      {
        homepageSurround.map((item, index) => {
          return (
            <div key={index} className='box' style={surroundBoxStyles()}>
              <div className="tag" style={{ color: randomColor() }}>{item}</div>
            </div>
          )
        })
      }
    </div>
  )
}
export default Surround
