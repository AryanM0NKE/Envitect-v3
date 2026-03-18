'use client'
import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Edges } from '@react-three/drei'
import * as THREE from 'three'

const TEAL = '#0A8A7A'
const TEAL_LIGHT = '#D6EFEC'

function BIMModel() {
  const groupRef = useRef<THREE.Group>(null)
  const blocksRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12
    }
    if (blocksRef.current) {
      blocksRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002
      })
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <pointLight position={[-5, 5, -5]} intensity={0.4} color={TEAL} />

      <group ref={groupRef}>
        <group ref={blocksRef}>
          {/* Foundation */}
          <Box args={[3, 0.3, 2.5]} position={[0, 0.15, 0]}>
            <meshStandardMaterial color="#3A4050" />
            <Edges color={TEAL} lineWidth={2} />
          </Box>

          {/* Wall blocks */}
          <Box args={[3, 2, 0.2]} position={[0, 1.3, 1.15]}>
            <meshStandardMaterial color="#94a3b8" transparent opacity={0.8} />
            <Edges color={TEAL} lineWidth={1.5} />
          </Box>
          <Box args={[3, 2, 0.2]} position={[0, 1.3, -1.15]}>
            <meshStandardMaterial color="#94a3b8" transparent opacity={0.8} />
            <Edges color={TEAL} lineWidth={1.5} />
          </Box>
          <Box args={[0.2, 2, 2.1]} position={[-1.4, 1.3, 0]}>
            <meshStandardMaterial color="#94a3b8" transparent opacity={0.8} />
            <Edges color={TEAL} lineWidth={1.5} />
          </Box>
          <Box args={[0.2, 2, 2.1]} position={[1.4, 1.3, 0]}>
            <meshStandardMaterial color="#94a3b8" transparent opacity={0.8} />
            <Edges color={TEAL} lineWidth={1.5} />
          </Box>

          {/* Floor slab */}
          <Box args={[2.6, 0.15, 2.1]} position={[0, 1.5, 0]}>
            <meshStandardMaterial color="#cbd5e1" />
            <Edges color={TEAL} lineWidth={1} />
          </Box>

          {/* Roof */}
          <Box args={[3.2, 0.2, 2.7]} position={[0, 2.5, 0]}>
            <meshStandardMaterial color="#475569" />
            <Edges color={TEAL} lineWidth={2} />
          </Box>

          {/* Columns */}
          {[[-1.2, 0.9], [1.2, 0.9], [-1.2, -0.9], [1.2, -0.9]].map(([x, z], i) => (
            <Box key={i} args={[0.25, 2.3, 0.25]} position={[x, 1.3, z]}>
              <meshStandardMaterial color="#64748b" />
              <Edges color={TEAL} lineWidth={1} />
            </Box>
          ))}

          {/* Door */}
          <Box args={[0.8, 1.5, 0.05]} position={[0, 0.9, 1.18]}>
            <meshStandardMaterial color={TEAL} transparent opacity={0.5} />
            <Edges color={TEAL} lineWidth={2} />
          </Box>

          {/* Windows */}
          {[-0.8, 0.8].map((x, i) => (
            <Box key={i} args={[0.8, 0.8, 0.05]} position={[x, 1.5, 1.18]}>
              <meshStandardMaterial color={TEAL_LIGHT} transparent opacity={0.45} />
              <Edges color={TEAL} lineWidth={1.5} />
            </Box>
          ))}

          {/* Level markers */}
          {[0.15, 1.5, 2.5].map((y, i) => (
            <Box key={i} args={[0.05, 0.05, 2.8]} position={[-2, y, 0]}>
              <meshBasicMaterial color={TEAL} />
            </Box>
          ))}
        </group>

        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[8, 6]} />
          <meshBasicMaterial color="#f8fafc" transparent opacity={0.4} />
        </mesh>
        <gridHelper args={[8, 16, TEAL, '#e2e8f0']} position={[0, 0.01, 0]} />
      </group>
    </>
  )
}

export function BIMModelingViewer() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 6, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <BIMModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 5}
        />
      </Canvas>
    </div>
  )
}
