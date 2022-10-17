/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/explainer/v2/ttc-explainer-poc-speech4.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.000819}>
        <group position={[0, -2.7, 25.4]}>
          <mesh geometry={nodes.Cylinder_3.geometry} material={materials.Yellow} position={[20, 0, 10.338786]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_2.geometry} material={materials.Yellow} position={[20, 0, 24.6]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Yellow} position={[20, 0, 38.861214]} rotation={[0, -Math.PI / 2, 0]} />
        </group>
        <group position={[0, 2.3, 0]}>
          <mesh geometry={nodes.Merged_Objects.geometry} material={materials.Red} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/explainer/v2/ttc-explainer-poc-speech4.glb')
