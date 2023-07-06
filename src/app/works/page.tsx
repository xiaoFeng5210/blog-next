import type { NextPage } from 'next'
import WorkList from '~/ui/WorkList'
import './works.scss'

const WorkPage: NextPage = () => {
  return (
    <div className='p-20px'>
      <header className='flex-inline justify-center text-center pt-[50px] pb-4'>
        <h1 className='text-[34px] pb-4 header_title'>作品展示</h1>
        <p>以下项目均由本人开发，均可自由使用，部分开源。</p>
        <button className="btn btn-neutral mt-4"><a href="https://github.com/xiaoFeng5210" target="_blank" rel="noreferrer">前往github</a></button>
      </header>
      <WorkList />
    </div>
  )
}
export default WorkPage
