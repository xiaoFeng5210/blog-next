import type { NextPage } from 'next'
import WorksClient from '~/ui/WorksClient'
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('~/ui/WorksClient'), {
  loading: () => <div className='flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
})

const WorkPage: NextPage = () => {
  return (
    <DynamicHeader />
  )
}
export default WorkPage
