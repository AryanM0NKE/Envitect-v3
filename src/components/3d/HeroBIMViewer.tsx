'use client'
import React, { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Grid, Float } from '@react-three/drei'
import * as THREE from 'three'

// Architectural wireframe building
const BuildingWireframe = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  const teal = '#0D9488'
  const navy = '#0F172A'
  const light = '#64748B'

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Main Tower */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 4, 2)]} />
        <lineBasicMaterial color={navy} linewidth={1} />
      </lineSegments>

      {/* Tower floors - horizontal divisions */}
      {[0, 1, 2].map((i) => (
        <lineSegments key={i} position={[0, -1 + i * 1.33, 0]}>
          <edgesGeometry args={[new THREE.BoxGeometry(2.01, 0.01, 2.01)]} />
          <lineBasicMaterial color={light} transparent opacity={0.5} />
        </lineSegments>
      ))}

      {/* Side Wing (lower) */}
      <lineSegments position={[2, -1, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
        <lineBasicMaterial color={navy} />
      </lineSegments>

      {/* Teal accent structure - curved roof feature */}
      <mesh position={[0, 2.2, 0]}>
        <torusGeometry args={[0.8, 0.03, 4, 32, Math.PI]} />
        <meshBasicMaterial color={teal} />
      </mesh>

      {/* Foundation grid */}
      <lineSegments position={[0, -3, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(6, 0.05, 6)]} />
        <lineBasicMaterial color={light} transparent opacity={0.3} />
      </lineSegments>

      {/* Vertical accent lines (teal) */}
      {[-1, 0, 1].map((x) => (
        <lineSegments key={x} position={[x, 0, 1.01]}>
          <edgesGeometry args={[new THREE.BoxGeometry(0.01, 4, 0.01)]} />
          <lineBasicMaterial color={teal} transparent opacity={0.4} />
        </lineSegments>
      ))}

      {/* Small structure detail */}
      <lineSegments position={[-2, -1.5, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(1.5, 1, 1.5)]} />
        <lineBasicMaterial color={light} transparent opacity={0.6} />
      </lineSegments>
    </group>
  )
}

// Blueprint grid floor plane
const BlueprintGrid = () => (
  <Grid
    position={[0, -4, 0]}
    args={[20, 20]}
    cellSize={1}
    cellThickness={0.3}
    cellColor="#0D9488"
    sectionSize={4}
    sectionThickness={0.8}
    sectionColor="#334155"
    fadeDistance={15}
    fadeStrength={1}
    infiniteGrid
  />
)

// Floating particles
const Particles = () => {
  const points = useMemo(() => {
    const arr = []
    for (let i = 0; i < 60; i++) {
      arr.push(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 12
      )
    }
    return new Float32Array(arr)
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#0D9488" size={0.04} transparent opacity={0.5} />
    </points>
  )
}

export const HeroBIMViewer = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [6, 3, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-5, 5, -5]} intensity={0.3} color="#0D9488" />

        <Suspense fallback={null}>
          <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
            <BuildingWireframe />
          </Float>
          <BlueprintGrid />
          <Particles />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 5}
        />
      </Canvas>
    </div>
  )
}
