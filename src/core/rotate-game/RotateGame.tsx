"use client"

import { FC, useEffect, useMemo, useState } from 'react'
import CoreContainer from '~/ui/CoreContainer'
import { prizeListOrigin } from './constants'
import './rotate-game.scss'

const RotateGame: FC = () => {
  const [rolling, setRolling] = useState(false)
  const [wheelDeg, setWheelDeg] = useState(0)
  useEffect(() => {
    console.log(wheelDeg)
  }, [wheelDeg])

  const prizeNumber = prizeListOrigin.length
  const prizeList = useMemo(() => {
    return prizeListOrigin.slice(0, prizeNumber)
  }, [prizeNumber])  
  const roll = (result: number) => {
    setRolling(true)
    setWheelDeg(wheelDeg => (wheelDeg - (wheelDeg % 360) + 360 * 6 +
      (360 - (360 / prizeList.length) * result)))
    setTimeout(() => {
      setRolling(false)
      alert(`恭喜你获得${prizeList[result].name}`)
    }, 4500)
  }
  const onClickRotate = () => {
    if (rolling) return
    const result = Math.floor(Math.random() * prizeList.length)
    roll(result)
  }
  return (
    <CoreContainer title='css转盘抽奖'>
      <div className='flex justify-center'>
        <div className="wheel-wrapper">
          <div className="wheel-pointer" onClick={onClickRotate}>Start</div>
          <div className="wheel-bg" style={{transform: `rotate(${wheelDeg}deg)`}}>
            <div className="prize-list">
              {
                prizeList.map((item, index) => {
                  return (
                    <div key={index} className="prize-item-wrapper">
                      <div className="prize-item flex flex-col items-center" style={{ transform: `rotate(${(360 / prizeList.length) * index}deg)` }}>
                        <div className="prize-name">{item.name}</div>
                        <div className="prize-icon">
                          <img src={item.icon} />
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </CoreContainer>
  )
}
export default RotateGame
