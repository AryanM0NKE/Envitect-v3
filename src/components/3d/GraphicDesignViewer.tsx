'use client'
import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, RoundedBox, Edges } from '@react-three/drei'
import * as THREE from 'three'

const TEAL = '#0A8A7A'
const GOLD = '#F0C96B'
const TEAL_PALE = '#D6EFEC'

function GraphicDesignModel() {
  const groupRef = useRef<THREE.Group>(null)
  const cardsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3
    }
    if (cardsRef.current) {
      cardsRef.current.children.forEach((child, i) => {
        child.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + i * 0.5) * 0.1
        child.position.y = Math.sin(state.clock.elapsedTime * 0.4 + i * 0.8) * 0.05
      })
    }
  })

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color={TEAL} />
      <pointLight position={[5, -5, 5]} intensity={0.3} color={GOLD} />

      <group ref={groupRef}>
        <group ref={cardsRef}>
          {/* Logo card */}
          <group position={[-1.5, 0.5, 0]}>
            <RoundedBox args={[1.2, 1.2, 0.05]} radius={0.05}>
              <meshStandardMaterial color="#ffffff" />
              <Edges color={TEAL} lineWidth={1} />
            </RoundedBox>
            {/* Brand mark — teal square */}
            <RoundedBox args={[0.5, 0.5, 0.06]} radius={0.08} position={[0, 0.1, 0]}>
              <meshStandardMaterial color={TEAL} />
            </RoundedBox>
            {/* Wordmark bar */}
            <Box args={[0.6, 0.08, 0.06]} position={[0, -0.35, 0]}>
              <meshStandardMaterial color="#0E0F0D" />
            </Box>
          </group>

          {/* Poster card */}
          <group position={[0, 0, 0.3]}>
            <RoundedBox args={[1, 1.4, 0.05]} radius={0.03}>
              <meshStandardMaterial color="#f8fafc" />
              <Edges color={TEAL} lineWidth={1} />
            </RoundedBox>
            <Box args={[0.8, 0.4, 0.06]} position={[0, 0.4, 0]}>
              <meshStandardMaterial color={TEAL} />
            </Box>
            <Box args={[0.8, 0.2, 0.06]} position={[0, -0.1, 0]}>
              <meshStandardMaterial color="#64748b" />
            </Box>
            <Box args={[0.8, 0.3, 0.06]} position={[0, -0.45, 0]}>
              <meshStandardMaterial color={TEAL_PALE} />
            </Box>
          </group>

          {/* Book cover card */}
          <group position={[1.5, 0.3, -0.2]}>
            <RoundedBox args={[1, 1.5, 0.08]} radius={0.02}>
              <meshStandardMaterial color="#0E0F0D" />
              <Edges color={TEAL} lineWidth={1} />
            </RoundedBox>
            {/* Spine */}
            <Box args={[0.1, 1.5, 0.1]} position={[-0.55, 0, 0]}>
              <meshStandardMaterial color="#065A4F" />
            </Box>
            {/* Gold accent band */}
            <Box args={[0.7, 0.5, 0.09]} position={[0.05, 0.3, 0]}>
              <meshStandardMaterial color={GOLD} />
            </Box>
            <Box args={[0.5, 0.08, 0.09]} position={[0.05, -0.3, 0]}>
              <meshStandardMaterial color="#ffffff" />
            </Box>
          </group>

          {/* Template grid card */}
          <group position={[0.8, -0.8, 0.5]}>
            <RoundedBox args={[1.4, 0.8, 0.05]} radius={0.03}>
              <meshStandardMaterial color="#ffffff" />
              <Edges color={TEAL} lineWidth={1} />
            </RoundedBox>
            {[-0.4, 0.05, 0.5].map((x, i) => (
              <Box key={i} args={[0.3, 0.6, 0.06]} position={[x, 0, 0]}>
                <meshStandardMaterial color={TEAL_PALE} />
              </Box>
            ))}
          </group>

          {/* Floating accents */}
          <mesh position={[-2, 1.2, 0.5]}>
            <sphereGeometry args={[0.12]} />
            <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[2, 1, -0.5]}>
            <coneGeometry args={[0.12, 0.25, 4]} />
            <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[1, -1.2, 0]}>
            <torusGeometry args={[0.15, 0.05, 8, 16]} />
            <meshStandardMaterial color={TEAL} />
          </mesh>
        </group>

        {/* Background */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
          <planeGeometry args={[10, 8]} />
          <meshBasicMaterial color={TEAL} transparent opacity={0.04} />
        </mesh>
      </group>
    </>
  )
}

export function GraphicDesignViewer() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 2, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <GraphicDesignModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 5}
        />
      </Canvas>
    </div>
  )
}
