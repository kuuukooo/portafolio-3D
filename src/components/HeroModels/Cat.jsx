// src/components/HeroModels/Cat.jsx
import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

function Cat(props) {
  const group = useRef()

  // Hook useGLTF con configuración de Draco
  const { nodes, materials, animations } = useGLTF(
    '/models/oiiaioooooiai_cat_draco.glb',
    (loader) => {
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('/draco/')  // ./public/draco/
      loader.setDRACOLoader(dracoLoader)
    }
  )
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions['Take 001']
    if (action) {
      action.reset().fadeIn(0.2).play()
    } else {
      console.warn('Animación "Take 001" no encontrada:', Object.keys(actions))
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="191d233c94184f188ac4fad4b07dc182fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Muchkin1002">
                  <mesh
                    name="0"
                    castShadow
                    receiveShadow
                    geometry={nodes['0'].geometry}
                    material={materials.Muchkin2}
                    morphTargetDictionary={nodes['0'].morphTargetDictionary}
                    morphTargetInfluences={nodes['0'].morphTargetInfluences}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

// Preload con Draco
useGLTF.preload(
  '/models/oiiaioooooiai_cat_draco.glb',
  (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')
    loader.setDRACOLoader(dracoLoader)
  }
)

export default React.memo(Cat)
