"use client"

import { FC, Suspense } from 'react'
import styles from '~/styles/common.module.scss'
import '~/styles/hero.scss'
import NavBar from '~/components/navbar'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero: FC = () => {
  return (
    <div className={styles.section}>
      <NavBar />
      <div className={styles.container}>
        <div className='left'>
          <h1 className="title">Introduction</h1>
        </div>
        <div className="right">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              {/* eslint-disable-next-line react/no-unknown-property */}
              <ambientLight intensity={1} />
              {/* eslint-disable-next-line react/no-unknown-property */}
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.3}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img className='three_img' src="/img/moon.png" alt="/img/moon.png" />
        </div>
      </div>
    </div>
  )
}
export default Hero
