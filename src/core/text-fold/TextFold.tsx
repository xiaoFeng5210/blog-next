"use client"
import type { FC } from 'react'
import CoreContainer from '~/ui/CoreContainer'
import './text-fold.scss'

const TextFold: FC = () => {
  return (
    <CoreContainer title='多行文本展开收起'>
      <div className='flex justify-center'>
        <input type="checkbox" className='opacity-0 exp' id="exp" />
          <div className="text w-[30%] text-fold">
           <label className="btntest" htmlFor="exp"></label>
            浮动元素是如何定位的
            正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。
            说实话，之前单独看这个布局，即使借助 JavaScript 也不是一件容易的事啊（需要计算文字宽度动态截取文本，vue-clamp就是这么做的），更别说下面的交互和判断逻辑了，不过经过我的一番琢磨，其实纯 CSS 也能完美实现的，下面就一步一步来看看如何实现吧~
          </div>
      </div>
    </CoreContainer>
  )
}
export default TextFold
