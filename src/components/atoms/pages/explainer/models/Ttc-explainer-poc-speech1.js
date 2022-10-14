/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/explainer/v2/ttc-explainer-poc-speech1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.616116, 0.56, 0.2273]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001299}>
        <group position={[0, -2.7, 25.4]}>
          <mesh geometry={nodes.Cylinder_3.geometry} material={materials.Purple} position={[20, 0, 10.338786]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_2.geometry} material={materials.Purple} position={[20, 0, 24.6]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Purple} position={[20, 0, 38.861214]} rotation={[0, -Math.PI / 2, 0]} />
        </group>
        <group position={[0, 2.3, 0]}>
          <mesh geometry={nodes.Merged_Objects_3.geometry} material={materials.Blue} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/explainer/v2/ttc-explainer-poc-speech1.glb')
