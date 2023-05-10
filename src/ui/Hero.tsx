"use client"
import { FC, Suspense, useRef } from 'react'
import styles from '~/styles/common.module.scss'
import heroStyles from '~/styles/hero.module.scss'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import type { NextPage } from 'next'

const ThreeRender: FC = () => {
  const sphereRef = useRef<any>();
  function ThreeFrame() {
    useFrame(({ clock }) => {
      sphereRef.current!.rotation.x += 0.02;
      sphereRef.current!.rotation.y += 0.02;
    })
    return null
  }
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={1} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight position={[3, 2, 1]} />
        <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#394E6A"
            attach="material"
            distort={0.3}
            speed={2}
          />
        </Sphere>
        <ThreeFrame />
      </Suspense>
    </Canvas>
  )
}

const Hero: NextPage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={heroStyles.left}>
          <span className={heroStyles.title}>Introduction</span>
          <p>一个前端开发者, 擅长vue3, react, threejs, canvas, 热爱技术, 喜欢钻研</p>
        </div>
        <div className={heroStyles.right}>
          <ThreeRender />
          <img className={heroStyles.three_img} src="/img/moon.png" alt="/img/moon.png" />
        </div>
      </div>
    </div>
  )
}
export default Hero
