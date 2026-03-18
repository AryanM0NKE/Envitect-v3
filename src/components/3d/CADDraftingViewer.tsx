'use client'
import React, { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Line, Edges } from '@react-three/drei'
import * as THREE from 'three'

const TEAL = '#0A8A7A'
const TEAL_DIM = '#065A4F'

function CADModel() {
  const groupRef = useRef<THREE.Group>(null)
  const blueprintRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (blueprintRef.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.015
      blueprintRef.current.scale.set(s, s, s)
    }
  })

  const outline = useMemo(() =>
    [[-2, 0, -1.5], [2, 0, -1.5], [2, 0, 1.5], [1, 0, 1.5],
     [1, 0, 0.5], [-1, 0, 0.5], [-1, 0, 1.5], [-2, 0, 1.5], [-2, 0, -1.5]]
      .map(p => new THREE.Vector3(...p)), [])

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <pointLight position={[0, 5, 0]} intensity={0.3} color={TEAL} />

      <group ref={groupRef}>
        <group ref={blueprintRef}>
          {/* Main floor plan outline */}
          <Line points={outline} color={TEAL} lineWidth={2} />

          {/* Inner walls */}
          <Line
            points={[new THREE.Vector3(-0.5, 0, -1.5), new THREE.Vector3(-0.5, 0, 0.5)]}
            color={TEAL} lineWidth={1.5}
          />
          <Line
            points={[new THREE.Vector3(0.5, 0, -1.5), new THREE.Vector3(0.5, 0, -0.5)]}
            color={TEAL} lineWidth={1.5}
          />
          <Line
            points={[new THREE.Vector3(-2, 0, 0), new THREE.Vector3(-0.5, 0, 0)]}
            color={TEAL} lineWidth={1.5}
          />

          {/* Dimension lines */}
          <Line
            points={[new THREE.Vector3(-2.3, 0, -1.7), new THREE.Vector3(-2.3, 0, 1.7)]}
            color="#64748b" lineWidth={1}
          />
          <Line
            points={[new THREE.Vector3(-2.2, 0, -1.7), new THREE.Vector3(-2.4, 0, -1.7)]}
            color="#64748b" lineWidth={1}
          />
          <Line
            points={[new THREE.Vector3(-2.2, 0, 1.7), new THREE.Vector3(-2.4, 0, 1.7)]}
            color="#64748b" lineWidth={1}
          />

          {/* Title block */}
          <Box args={[1.2, 0.02, 0.6]} position={[1.3, 0, 1.1]}>
            <meshBasicMaterial color="#f1f5f9" transparent opacity={0.8} />
            <Edges color={TEAL} lineWidth={1} />
          </Box>

          {/* Grid */}
          {Array.from({ length: 9 }, (_, i) => (
            <Line
              key={`v-${i}`}
              points={[new THREE.Vector3(-2 + i * 0.5, 0, -2), new THREE.Vector3(-2 + i * 0.5, 0, 2)]}
              color={TEAL_DIM} lineWidth={0.5} transparent opacity={0.3}
            />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <Line
              key={`h-${i}`}
              points={[new THREE.Vector3(-2.5, 0, -2 + i * 0.5), new THREE.Vector3(2.5, 0, -2 + i * 0.5)]}
              color={TEAL_DIM} lineWidth={0.5} transparent opacity={0.3}
            />
          ))}

          {/* 3D extrusion preview */}
          <Box args={[4, 0.05, 3]} position={[0, -0.1, 0]}>
            <meshBasicMaterial color={TEAL} transparent opacity={0.08} />
            <Edges color={TEAL} lineWidth={0.5} />
          </Box>
        </group>

        {/* Background plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.15, 0]}>
          <planeGeometry args={[8, 6]} />
          <meshBasicMaterial color="#0E0F0D" transparent opacity={0.6} />
        </mesh>
      </group>
    </>
  )
}

export function CADDraftingViewer() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3, 5, 3], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <CADModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>
    </div>
  )
}
