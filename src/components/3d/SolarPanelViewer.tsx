'use client'
import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Edges } from '@react-three/drei'
import * as THREE from 'three'

const TEAL = '#0A8A7A'
const GOLD = '#F0C96B'

function SolarModel() {
  const groupRef = useRef<THREE.Group>(null)
  const panelRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25
    }
    if (panelRef.current) {
      panelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <pointLight position={[-3, 5, 3]} intensity={0.5} color={GOLD} />
      <pointLight position={[3, 3, -3]} intensity={0.3} color={TEAL} />

      <group ref={groupRef}>
        <group ref={panelRef}>
          {/* Main panel frame */}
          <Box args={[3, 0.05, 2]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#1a365d" metalness={0.8} roughness={0.2} />
            <Edges color={TEAL} lineWidth={2} />
          </Box>

          {/* Solar cells 6×4 grid */}
          {Array.from({ length: 6 }, (_, i) =>
            Array.from({ length: 4 }, (_, j) => (
              <Box
                key={`${i}-${j}`}
                args={[0.4, 0.02, 0.4]}
                position={[-1.2 + i * 0.48, 0.04, -0.7 + j * 0.48]}
              >
                <meshStandardMaterial
                  color="#065A4F"
                  metalness={0.9}
                  roughness={0.1}
                  emissive={TEAL}
                  emissiveIntensity={0.2}
                />
              </Box>
            ))
          )}

          {/* Mounting supports */}
          <Box args={[0.1, 0.8, 0.1]} position={[-1, -0.4, 0]}>
            <meshStandardMaterial color="#4a5568" metalness={0.5} />
          </Box>
          <Box args={[0.1, 0.8, 0.1]} position={[1, -0.4, 0]}>
            <meshStandardMaterial color="#4a5568" metalness={0.5} />
          </Box>

          {/* Base rail */}
          <Box args={[2.5, 0.05, 0.3]} position={[0, -0.8, 0]}>
            <meshStandardMaterial color="#2d3748" metalness={0.6} />
            <Edges color={TEAL} lineWidth={1} />
          </Box>

          {/* Sun glow orbs */}
          {[[2, 1.2, 1.5], [-1.8, 1.3, 1], [1.2, 1.6, -1.5]].map(([x, y, z], i) => (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.06]} />
              <meshBasicMaterial color={GOLD} />
            </mesh>
          ))}
        </group>

        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshBasicMaterial color={TEAL} transparent opacity={0.04} />
        </mesh>
        <gridHelper args={[8, 16, TEAL, '#e2e8f0']} position={[0, -0.99, 0]} />
      </group>
    </>
  )
}

export function SolarPanelViewer() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [6, 4, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <SolarModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>
    </div>
  )
}
