"use client"
import type { FC } from 'react'
import './works-card.scss'
import Image from 'next/image'

interface Props {
  title: string
  desc: string
  img: string
  id: string | number
  href?: string
}
const WorkCard: FC<Props> = () => {
  return (
    <div className='card_box'>
      <div className='w-full h-[200px] image_box'>
        <Image src="/img/works/natrue.jpg" alt='test' fill={true} style={{ objectFit: "cover" }} />
      </div>

      <div className="content p-[16px] w-full h-full">
        <h3 className="text-[20px] font-bold text-[#11AFFA]">标题小样式</h3>
        <p>基于 NestJs + Vben Admin 编写的一款前后端分离的权限管理系统</p>
      </div>

    </div>
  )
}
export default WorkCard
