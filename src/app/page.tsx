// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '../styles/page.module.scss'
import Works from '../ui/Works'
import Hero from '../ui/Hero'
import Who from '../ui/Who'
import Contact from '../ui/Contact'

type User = {
  name: string
  email: string
  id: number
}
type Props = {
  data: User[]
}

// const getData = async () => {
//   const res = await fetch(`${process.env.BASE_FETCH_URL}/api/user`, {
//     method: 'GET', headers: {
//       'Content-Type': 'application/json'
//     },
//   }).catch(err => { throw new Error(err) })
//   return await res.json()
// }

const Home = async () => {
  return (
    <>
      <div className="cursor-pointer text-2xl">测试文件</div>
      <div className={styles.main}>
        <Hero />
        <Who />
        <Works />
        <Contact />
      </div>
    </>

  )
}

export default Home
