'use client'

import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, MeshTransmissionMaterial, MeshWobbleMaterial, OrbitControls, RoundedBox, shaderMaterial, Sphere, Float, Circle } from "@react-three/drei"
import { useRef, useState, useEffect, forwardRef } from 'react'
import { Physics, RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import Lenis from "lenis";
import { gsap } from "gsap";
import { animateObject } from "./3dAnimation";


const Box = (props) => {
  
  // Remove the useControls hook to turn off the Leva panel
  // const materialProps = useControls({
  //   thickness: {value: 0.6, min: 0, max: 3, step: 0.05},
  //   roughness: {value: 0.5, min: 0, max: 1, step: 0.1},
  //   transmission: {value: 1.25, min: 0, max: 2, step: 0.05},
  //   ior: {value: 2.3, min: 0, max: 3, step: 0.1},
  //   chromaticAberration: {value: 0.31, min: 0, max: 1},
  //   backside: {value: true},
  // })

  // Use default material properties instead
  const materialProps = {
    thickness: 0.6,
    roughness: 0.5,
    transmission: 1.25,
    ior: 2.3,
    chromaticAberration: 0.31,
    backside: true,
  }

  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [scale, setScale] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  useFrame((state, delta) => (meshRef.current.rotation.y += delta))
  // useFrame((state, delta) => (meshRef.current.scale.set(Math.min(1,Math.log1p(scrollY / 100)), Math.min(1,Math.log1p(scrollY / 100)), Math.min(1,Math.log1p(scrollY / 100))) ))
  // useFrame((state, delta) => (meshRef.current.position.x = Math.sin(scrollY / 250) * 5))
  // useFrame((state, delta) => (meshRef.current.position.z = Math.min(1,Math.log1p(scrollY / 10))))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <RigidBody>
    <mesh castShadow receiveShadow 
      {...props}
      ref={meshRef}
      scale={1}
      // onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <RoundedBox 
        args={[1, 1, 1]} 
        radius={0.06}
        creaseAngle={0.9}
        smoothness={4}>
      
        <MeshTransmissionMaterial 
        {...materialProps} 
        color={"orange"} />
        <MeshDistortMaterial distort={1} speed={5} color={"orange"} />
        <MeshWobbleMaterial color={"orange"} factor={1} speed={4}/>
        {/* <meshStandardMaterial color={"orange"} opacity={0.6}/> */}
      </RoundedBox> 
    </mesh>
    </RigidBody>
  )
}

Box.displayName = 'Box'

export const ThreeScene = () => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)  

    return (
        <>
        {/* <Canvas gl={{anitalias: true}} dpr={[1, 1.5]}> */}
        <OrbitControls rotateSpeed={5} enableZoom={false}/>
                <spotLight position={[0, 1.5, 0]} angle={0.25} intensity={20} />
                <spotLight position={[0, 1.8, 0]} angle={0.25} intensity={10} />
                <spotLight position={[0, -1.8, 0]} angle={0.25} intensity={10} />
                <spotLight position={[0, 2, 0]} angle={0.25} intensity={Math.PI}/>
                <spotLight position={[2, 2, 0]} angle={0.25} intensity={Math.PI}/>
                {/* <pointLight position={5, 5, 5} intensity={2} /> */}
                <directionalLight position={[5, 10, 5]} angle={0.25} intensity={5} />
                <ambientLight position={[5, 5, 5]} intensity={0.4} />
                {/* <BackgroundCircle /> */}
                <Physics gravity={[0, 0, 0]} colliders={null}>
                <Float speed={4} rotationIntensity={2} floatIntensity={1.5} floatingRange={[-0.5, 0.5]}>
                    <Box position={[0, 0, 0]}/>
                </Float>
                </Physics>
        {/* </Canvas> */}
        </>
    )
}