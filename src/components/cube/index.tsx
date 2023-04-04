import { FC, useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube: FC = () => {
  const textRef = useRef<any>();
  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}
export default Cube
