"use client"

import { FC, Suspense, useRef } from 'react'
import styles from '~/styles/common.module.scss'
import heroStyles from '~/styles/hero.module.scss'
import NavBar from '~/components/navbar'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero: FC = () => {
  const sphereRef = useRef<any>();
  function ThreeFrame() {
    useFrame(({ clock }) => {
      sphereRef.current!.rotation.x += 0.02;
      sphereRef.current!.rotation.y += 0.02;
    })
    return null
  }

  return (
    <div className={styles.section}>
      <NavBar />
      <div className={styles.container}>
        <div className={heroStyles.left}>
          <h1 className={heroStyles.title}>Introduction</h1>
        </div>
        <div className={heroStyles.right}>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              {/* eslint-disable-next-line react/no-unknown-property */}
              <ambientLight intensity={1} />
              {/* eslint-disable-next-line react/no-unknown-property */}
              <directionalLight position={[3, 2, 1]} />
              <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.3}
                  speed={2}
                />
              </Sphere>
              <ThreeFrame />
            </Suspense>
          </Canvas>
          <img className={heroStyles.three_img} src="/img/moon.png" alt="/img/moon.png" />
        </div>
      </div>
    </div>
  )
}
export default Hero
