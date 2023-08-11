import { FC, useMemo } from 'react'
import CoreContainer from '~/ui/CoreContainer'
import { prizeListOrigin } from './constants'
import './rotate-game.scss'

const RotateGame: FC = () => {
  const prizeNumber = prizeListOrigin.length
  const prizeList = useMemo(() => {
    return prizeListOrigin.slice(0, prizeNumber)
  }, [prizeNumber])
  return (
    <CoreContainer title='css转盘抽奖'>
      <div className='flex justify-center'>
        <div className="wheel-wrapper">
          <div className="wheel-pointer">Start</div>
          <div className="wheel-bg">
            <div className="prize-list">
              {
                prizeList.map((item, index) => {
                  return (
                    <div key={index} className="prize-item-wrapper">
                      <div className="prize-item">
                        
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
