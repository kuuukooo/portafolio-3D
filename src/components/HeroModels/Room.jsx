import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const [albedo, normalMap, roughnessMap] = useTexture([
    "/images/textures/WoodFloor064_1K-JPG_Color.jpg",
    "/images/textures/WoodFloor064_1K-JPG_NormalGL.jpg",
    "/images/textures/WoodFloor064_1K-JPG_Roughness.jpg",
  ]);

  const woodMaterial = new THREE.MeshStandardMaterial({
    map: albedo,
    normalMap: normalMap,
    roughnessMap: roughnessMap,
    roughness: 1.0,
    metalness: 0.0,
    color: new THREE.Color(0x333333),
  });


  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: "#568f56",
  });

  //const bodyMaterial = new THREE.MeshPhongMaterial({
  //map: matcapTexture,
  //});

  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: "#2e2e2e",  // un gris oscuro
    roughness: 0.9,     // muy áspero, casi mate
    metalness: 0.0,
  });


  const tableMaterial = new THREE.MeshStandardMaterial({
    color: "#000000",
    roughness: 0.8,    // más alto = menos reflejo
    metalness: 0.0,    // nada metálico
  });

  const compMaterial = new THREE.MeshStandardMaterial({
    color: "#fff",
  });

  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: "#8338ec",
  });

  const chairMaterial = new THREE.MeshPhongMaterial({
    color: "#000",
  });

  const keyboardMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
  });

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={curtainMaterial}
      />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={chairMaterial}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.handls_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={keyboardMaterial}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.miuse_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={pillowMaterial}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vires_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window_blinn1_0.geometry}
        material={woodMaterial}
      />
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={materials.phong1}
      />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");