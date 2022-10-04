/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Star(props) {
  const { nodes } = useGLTF('/shape-stack-tool/star.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Star.geometry} material={props.mat} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
    </group>
  )
}

useGLTF.preload('/star.glb')
