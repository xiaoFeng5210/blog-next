import type { FC } from 'react'
import WorkShow from './WorksShow'
const WorkDetail: FC<{ id: string }> = ({ id }) => {
  return (
    <div className='w-full h-full p-[16px]'>
      <div className="show w-full h-[600px]">
        <WorkShow id={Number(id)} />
      </div>
    </div>
  )
}
export default WorkDetail
