"use client"
import type { FC } from 'react'
import './works-card.scss'
import Image from 'next/image'
import type { WorksSettings } from '~/types'
import { toBase64, shimmer } from '~/utils/help'
import Link from 'next/link'

type Props = WorksSettings

const WorkCard: FC<Props> = (props) => {
  const { title, desc, img, id } = props
  return (
    <Link href={`/works/${id}`}>
      <div className='card_box'>
      <div className='w-full h-[200px] image_box'>
        <Image src={img} alt='test' fill={true} placeholder='blur' blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} style={{ objectFit: "contain" }} />
      </div>
      <div className="content p-[16px] w-full h-full">
        <h3 className="text-[20px] font-bold text-[#11AFFA]">{title}</h3>
        <div className='desc'>{desc}</div>
      </div>
    </div>
    </Link>
    
  )
}
export default WorkCard
