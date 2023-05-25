"use client"
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import styles from './navbar.module.scss'

type HandleScroll = (e: boolean) => void
const getNames = () => {
  return ['主页', '动效作品', '2d作品', '3d作品', '个人介绍']
}

const useScroll = (handle: HandleScroll) => {
  const backdrop = useRef(null)
  const handleScroll = (e: Event) => {
    // 获取当前滚动的垂直位置
    const scrollTop = document.documentElement.scrollTop;
    // 检查滚动位置，根据需要进行样式变化
    handle(scrollTop > 0)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return { backdrop, handleScroll }
}

const ProgressBar: FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setProgress((scrollPosition / totalHeight) * 100);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (!(progress === 0))
    ? <progress value={progress} max="100" style={{ width: '100%', height: '5px' }} />
    : <></>
}

const NavBar: FC = () => {
  const [isShowBackdrop, setIsShowBackdrop] = useState(false)
  const { backdrop } = useScroll(setIsShowBackdrop)
  const isShowBackdropStyles = useMemo(() => {
    return isShowBackdrop ? {
      backdropFilter: 'blur(5px)',
      background: 'hsla(0, 0%, 100%, .75)'
    } : {}
  }, [isShowBackdrop])
  return (
    <div ref={backdrop} className={styles.section} style={isShowBackdropStyles}>
      <div className={styles.container}>
        <div className={styles.links}>
          <span className={styles.logo}>Aurora</span>
          <ul className={styles.list}>
            {
              getNames().map((item, index) => {
                return (
                  <li className={styles.list_item} key={index}>{item}</li>
                )
              })
            }
          </ul>
        </div>
        <ProgressBar />
      </div>
    </div>
  )
}
export default NavBar

