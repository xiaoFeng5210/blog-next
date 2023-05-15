"use client"
import { FC, useEffect, useRef } from 'react'
import styles from './navbar.module.scss'

const getNames = () => {
  return ['主页', '动效作品', '2d作品', '3d作品', '个人介绍']
}

const useScroll = () => {
  const backdrop = useRef(null)
  const handleScroll = (e: Event) => {
    console.log('滚动')
    // 获取当前滚动的垂直位置
    const scrollTop = document.documentElement.scrollTop;
    console.log(e)
    // 检查滚动位置，根据需要进行样式变化
    if (scrollTop > 0) {
      // 滚动时显示背景效果
      console.log(backdrop)

    } else {
      // 滚动到顶部时恢复初始样式

    }
  }
  useEffect(() => {
    console.log('初始化')
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return { backdrop, handleScroll }
}

const NavBar: FC = () => {
  const { backdrop } = useScroll()
  return (
    <div ref={backdrop} className={styles.section}>
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
      </div>
    </div>
  )
}
export default NavBar

