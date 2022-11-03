/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/gltf-animations/Fox/glTF/Fox.gltf')
  const { ref, actions, names } = useAnimations(animations, group)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions[names[index]].reset().fadeIn(0.5).play()
    // In the clean-up phase, fade it out
    return () => actions[names[index]].fadeOut(0.5)
  }, [index, actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={ref}>
        <group name="root">
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            onClick={() => setIndex((index + 1) % names.length)}
            name="fox"
            geometry={nodes.fox.geometry}
            material={materials.fox_material}
            skeleton={nodes.fox.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/gltf-animations/Fox/glTF/Fox.gltf')
