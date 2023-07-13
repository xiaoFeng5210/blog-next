import type { FC } from 'react'
const WorkDetail: FC<{id: string}> = ({id}) => {
  return (
    <div className='w-full h-full p-[16px]'>
      {id}
    </div>
  )
}
export default WorkDetail
