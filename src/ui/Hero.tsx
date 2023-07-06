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
      <Suspense fallback={<div>Loading...</div>}>
        <OrbitControls enableZoom={false} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={1} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight position={[3, 2, 1]} />
        <Sphere ref={sphereRef} args={[1, 90, 100]} scale={2.4}>
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
          <span className={`${heroStyles.title} animate__animated animate__bounce`}>👋嗨, 我是张庆风</span>
          <p className='animate__animated animate__backInLeft text-[#394E6A]'>A front-end developer, good at vue3, react, threejs, canvas, loves front-end, likes to delve into new technologies, and tries to do and participate in some open source projects</p>
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
