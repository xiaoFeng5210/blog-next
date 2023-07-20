import type { FC } from 'react'

interface Props {
  title: string
  children?: React.ReactNode
}
const CoreContainer: FC<Props> = ({ title, children }) => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <p className='text-2xl'>{title}</p>
      <div className="divider"></div>
      {children}
    </div>
  )
}
export default CoreContainer
