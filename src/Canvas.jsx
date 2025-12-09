import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls, useGLTF, AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from 'react'

export const App = ({ position = [-1, 0, 2.5], fov = 25 }) => {
  return (
    <Canvas
      shadows
      camera={{ position, fov }}
      eventSource={document.getElementById("root")}
      eventPrefix="client"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <Center>
        <Shirt />
        <Backdrop />
      </Center>

      <OrbitControls />
    </Canvas>
  );
};

function Shirt(props) {
const { nodes, materials } = useGLTF('/shirt_starter_test.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        position={[0, 0.265, -0.008]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

function Backdrop() {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}>
        <RandomizedLight 
          amount={4}
          radius={9}
          intensity={1}
          ambient={0.25}
          position={[5, 5, -10]}
        />
        <RandomizedLight 
          amount={4}
          radius={5}
          intensity={5}
          ambient={0.55}
          position={[-5, -5, -9]}
        />
    </AccumulativeShadows>
  )
}



useGLTF.preload('/shirt_starter_test.glb')
