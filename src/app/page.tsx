// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '../styles/page.module.scss'
import Works from '../ui/Works'
import Hero from '../ui/Hero'
import Who from '../ui/Who'
import Contact from '../ui/Contact'


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </main>
  )
}
