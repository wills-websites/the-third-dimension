/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Arch(props) {
  const { nodes } = useGLTF('/shape-stack-tool/arch.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Arch.geometry} material={props.mat} rotation={[-Math.PI / 2, 0, 0]} scale={0.04} />
    </group>
  )
}

useGLTF.preload('/arch.glb')
