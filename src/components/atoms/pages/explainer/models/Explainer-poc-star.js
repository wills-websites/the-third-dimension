/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/explainer/explainer-poc-star.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.14332, 0.039459, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh geometry={nodes.Exploded_Mesh.geometry} material={materials['MAT 1']} position={[25.547731, 2.567962, 0.668496]} scale={0.147999} />
      </group>
    </group>
  )
}

useGLTF.preload('/explainer/explainer-poc-star.glb')
