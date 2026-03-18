'use client'
import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, RoundedBox, Edges } from '@react-three/drei'
import * as THREE from 'three'

// Brand colours
const TEAL = '#0A8A7A'
const GOLD = '#F0C96B'

function ArchitectureModel() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 5]} intensity={1} />
      <pointLight position={[0, 2, 2]} intensity={0.6} color={GOLD} />
      <pointLight position={[-2, 1, 0]} intensity={0.3} color={TEAL} />

      <group ref={groupRef}>
        {/* Floor */}
        <Box args={[4, 0.15, 3]} position={[0, 0.075, 0]}>
          <meshStandardMaterial color="#e2e8f0" />
          <Edges color={TEAL} lineWidth={1} />
        </Box>

        {/* Ceiling */}
        <Box args={[4, 0.15, 3]} position={[0, 2.5, 0]}>
          <meshStandardMaterial color="#f1f5f9" />
          <Edges color={TEAL} lineWidth={1} />
        </Box>

        {/* Back wall */}
        <Box args={[4, 2.5, 0.15]} position={[0, 1.25, -1.425]}>
          <meshStandardMaterial color="#f8fafc" />
          <Edges color={TEAL} lineWidth={1} />
        </Box>

        {/* Right wall */}
        <Box args={[0.15, 2.5, 3]} position={[1.925, 1.25, 0]}>
          <meshStandardMaterial color="#f8fafc" />
          <Edges color={TEAL} lineWidth={1} />
        </Box>

        {/* Front wall panels */}
        <Box args={[1.2, 2.5, 0.15]} position={[-1.4, 1.25, 1.425]}>
          <meshStandardMaterial color="#f8fafc" />
          <Edges color={TEAL} lineWidth={1} />
        </Box>
        <Box args={[1.2, 2.5, 0.15]} position={[1.4, 1.25, 1.425]}>
          <meshStandardMaterial color="#f8fafc" />
          <Edges color={TEAL} lineWidth={1} />
        </Box>
        <Box args={[1.6, 0.5, 0.15]} position={[0, 2.25, 1.425]}>
          <meshStandardMaterial color="#f8fafc" />
          <Edges color={TEAL} lineWidth={1} />
        </Box>

        {/* Large window glass */}
        <Box args={[1.6, 1.8, 0.05]} position={[0, 1.1, 1.45]}>
          <meshStandardMaterial
            color="#87ceeb"
            transparent
            opacity={0.35}
            emissive={TEAL}
            emissiveIntensity={0.12}
          />
          <Edges color={TEAL} lineWidth={1} />
        </Box>

        {/* Window frame */}
        <Box args={[1.7, 0.05, 0.08]} position={[0, 2.05, 1.45]}>
          <meshStandardMaterial color="#1e293b" />
        </Box>
        <Box args={[1.7, 0.05, 0.08]} position={[0, 0.15, 1.45]}>
          <meshStandardMaterial color="#1e293b" />
        </Box>
        <Box args={[0.05, 1.9, 0.08]} position={[-0.8, 1.1, 1.45]}>
          <meshStandardMaterial color="#1e293b" />
        </Box>
        <Box args={[0.05, 1.9, 0.08]} position={[0.8, 1.1, 1.45]}>
          <meshStandardMaterial color="#1e293b" />
        </Box>

        {/* Sofa */}
        <Box args={[1.5, 0.4, 0.6]} position={[-0.5, 0.35, -0.8]}>
          <meshStandardMaterial color="#3A4050" />
        </Box>
        <Box args={[1.5, 0.5, 0.15]} position={[-0.5, 0.65, -1.05]}>
          <meshStandardMaterial color="#3A4050" />
        </Box>

        {/* Coffee table */}
        <RoundedBox args={[0.8, 0.05, 0.5]} radius={0.02} position={[0.5, 0.35, 0]}>
          <meshStandardMaterial color="#d4a574" />
          <Edges color={GOLD} lineWidth={1} />
        </RoundedBox>

        {/* Floor lamp */}
        <Box args={[0.06, 1.5, 0.06]} position={[1.3, 0.75, 0.8]}>
          <meshStandardMaterial color="#1e293b" />
        </Box>
        <RoundedBox args={[0.28, 0.35, 0.28]} radius={0.05} position={[1.3, 1.6, 0.8]}>
          <meshStandardMaterial
            color="#fef3c7"
            emissive={GOLD}
            emissiveIntensity={0.5}
          />
        </RoundedBox>

        {/* Plant */}
        <Box args={[0.22, 0.28, 0.22]} position={[-1.5, 0.18, 0.8]}>
          <meshStandardMaterial color="#7c2d12" />
        </Box>
        <mesh position={[-1.5, 0.6, 0.8]}>
          <sphereGeometry args={[0.22]} />
          <meshStandardMaterial color="#22c55e" />
        </mesh>

        {/* Wall art */}
        <Box args={[0.8, 0.6, 0.02]} position={[-1.4, 1.5, -1.35]}>
          <meshStandardMaterial color={GOLD} />
          <Edges color="#d97706" lineWidth={1} />
        </Box>
      </group>

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshBasicMaterial color={TEAL} transparent opacity={0.04} />
      </mesh>
    </>
  )
}

export function ArchitectureInteriorViewer() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [6, 4, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ArchitectureModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>
    </div>
  )
}
