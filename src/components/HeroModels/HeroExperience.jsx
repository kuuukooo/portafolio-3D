import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import { Cat } from './Cat'
import { Suspense } from 'react'

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1180px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // Si estamos en tablet o móvil, deshabilitamos los controles y el canvas no intercepta eventos táctiles.
  const disableInteraction = isTablet || isMobile

  return (
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
      <Suspense fallback={null}>
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
  )
}

export default HeroExperience
