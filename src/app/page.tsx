// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '../styles/page.module.scss'
import Works from '../ui/Works'
import Hero from '../ui/Hero'
import Who from '../ui/Who'
import Contact from '../ui/Contact'
// import prisma from '../../prisma'

type User = {
  name: string
  email: string
  id: number
}
type Props = {
  data: User[]
}

const getData = async () => {
  const res = await fetch(`${process.env.BASE_FETCH_URL}/api/user`, { method: 'GET' }).catch(err => { throw new Error(err) })
  return res
}


const Home = async () => {
  const users = await getData()
  console.log(users)
  return (
    <div className={styles.main}>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  )
}

export default Home
