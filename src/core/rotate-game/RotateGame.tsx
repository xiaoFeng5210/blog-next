import type { FC } from 'react'
import CoreContainer from '~/ui/CoreContainer'
import './rotate-game.scss'

const RotateGame: FC = () => {
  return (
    <CoreContainer title='css转盘抽奖'>
      <div className='flex justify-center'>
        <div className="wheel-wrapper">
          <div className="wheel-pointer">Start</div>
          <div className="wheel-bg">
            
          </div>
        </div>
      </div>
    </CoreContainer>
  )
}
export default RotateGame
