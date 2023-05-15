import styles from '../styles/page.module.scss'
import Works from '../ui/Works'
import Hero from '../ui/Hero'
import Who from '../ui/Who'
import Contact from '../ui/Contact'
import NavBar from '~/components/navbar'

type User = {
  name: string
  email: string
  id: number
}
type Props = {
  data: User[]
}

const Home = async () => {
  return (
    <>
      <NavBar />
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
