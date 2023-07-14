import type { FC } from 'react'
import { workShow } from '~/core'
const WorkShow: FC<{ id: number }> = ({ id }) => {
  return (
    <>
      {workShow(id)}
    </>
  )
}
export default WorkShow
