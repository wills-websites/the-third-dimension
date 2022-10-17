/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/explainer/v2/ttc-explainer-poc-man-head.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001559}>
        <mesh geometry={nodes.hair.geometry} material={materials.Yellow} position={[-0.302015, 1.723801, 26.107182]} scale={[1.359805, 1.359805, 1.644455]} />
        <mesh geometry={nodes['Sphere_2_-_baked'].geometry} material={materials.Blue} position={[-0.302015, 2.299451, 32.699722]} scale={[1.321286, 1.321286, 1.456455]} />
        <mesh geometry={nodes.ear_2.geometry} material={materials.Blue} position={[66, 1.580784, 89.231462]} rotation={[Math.PI / 2, 0, 0]} scale={0.394923} />
        <mesh geometry={nodes.ear_3.geometry} material={materials.Blue} position={[-66, 1.580784, 89.231462]} rotation={[Math.PI / 2, 0, 0]} scale={0.394923} />
        <mesh geometry={nodes.nose.geometry} material={materials.Blue} position={[-0.302015, -30.556612, 79.876079]} rotation={[1.462811, 0, 0]} />
        <mesh geometry={nodes.Sphere.geometry} material={materials.Black} position={[19.697985, -59.702044, 91.530219]} scale={0.164966} />
        <mesh geometry={nodes.Sphere_1.geometry} material={materials.Black} position={[-20.302015, -59.702044, 91.530219]} scale={0.164966} />
        <mesh geometry={nodes.neck_base.geometry} material={materials.Blue} position={[-0.302015, 24.732877, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/explainer/v2/ttc-explainer-poc-man-head.glb')
