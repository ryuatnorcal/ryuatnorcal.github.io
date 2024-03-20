import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Threejs = (props) => {
  const meshRef = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  return (
    <group>
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={[0, 0, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        position={[2, 1, -1]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#000" />
      </mesh>
    </group>
  )
}

export default Threejs