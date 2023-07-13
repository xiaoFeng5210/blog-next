import type { NextPage } from 'next'
import WorksClient from '~/ui/WorksClient'
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('~/ui/WorksClient'), {
  loading: () => <p>Loading...</p>,
})

const WorkPage: NextPage = () => {
  return (
    <DynamicHeader />
  )
}
export default WorkPage
