import React, {Suspense} from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {Box, OrbitControls} from "@react-three/drei";
import {Helix} from "../components/atoms/pages/shape-stack-tool/shapes/Helix";
import * as THREE from "three";
import {Debug, Physics, RigidBody} from "@react-three/rapier";
import ShapeStackInner from "../components/atoms/pages/shape-stack-tool/ShapeStackInner";
import Pointer from "../components/atoms/pages/shape-stack-tool/Pointer";
import {Perf} from "r3f-perf";

const Holder = styled.div`
`;

function ShapeStackTool() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="Shape stack tool" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 5, size.width > 576 ? 35 : 45],
            fov: 40,
          }}>
          {/*<OrbitControls />*/}
          {/*<axesHelper args={[5]} />*/}
          <ambientLight intensity={0.5} color={'white'} />
          <DefaultDirectionalLight intensity={0.4} />
          <DefaultDirectionalLight intensity={0.4} position={[-5, -10, -5]} />
          <Suspense fallback={null}>
            <Physics
            gravity={[0,0,0]}>
              {/*<Debug color="white" sleepColor="grey" />*/}
              <ShapeStackInner />
              <Pointer/>
            </Physics>
          </Suspense>
          <Perf/>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default ShapeStackTool;
