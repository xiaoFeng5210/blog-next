/* eslint-disable react/prop-types */
import { NextPage } from 'next'
import WorkDetail from '~/ui/WorkDetail'

interface WorkPageProps {
  params: {
    id: string
  }
}

const WorkPage: NextPage<WorkPageProps> = ({ params }) => {
  return (
    <WorkDetail id={params.id} />
  )
}
export default WorkPage

