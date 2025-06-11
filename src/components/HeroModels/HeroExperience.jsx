import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useProgress } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import { Cat } from './Cat'
import { Suspense, useState, useEffect, useRef } from 'react'

// Loader component to show loading progress
function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="bg-black bg-opacity-75 text-white px-4 py-2 rounded">
        Cargando Modelo 3D... {progress.toFixed(0)}%
      </div>
    </Html>
  )
}

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1180px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const disableInteraction = isTablet || isMobile

  // Native Intersection Observer to track visibility
  const containerRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full">
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 15], fov: 45 }}
          onCreated={({ gl }) => {
            gl.domElement.style.touchAction = 'auto'
          }}
          style={{ pointerEvents: disableInteraction ? 'none' : 'auto' }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.2} color="#1a1a40" />

          {!disableInteraction && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              maxDistance={20}
              minDistance={5}
              minPolarAngle={Math.PI / 5}
              maxPolarAngle={Math.PI / 2}
            />
          )}

          <HeroLights />

          <Suspense fallback={<Loader />}>
            <group
              scale={isMobile ? 0.9 : 1}
              position={[0, -3.5, 0]}
              rotation={[0, -Math.PI / 4, 0]}
            >
              <Cat position={[0, 1.2, 0]} scale={1.7} />
              <Room />
            </group>
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}

export default React.memo(HeroExperience)