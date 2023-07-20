"use client"
import type { FC } from 'react'
import CoreContainer from '~/ui/CoreContainer'
import './gradent-border.scss'

const GradentBorder: FC = () => {
  return (
    <CoreContainer title='渐变边框'>
      <div className='box gradient-border'></div>
    </CoreContainer>
  )
}
export default GradentBorder
