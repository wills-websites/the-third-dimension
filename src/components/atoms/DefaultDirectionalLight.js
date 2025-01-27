import React, {useRef} from 'react';
import {useHelper} from "@react-three/drei";
import {CameraHelper, DirectionalLightHelper} from "three";
import PropTypes from "prop-types";

function DefaultDirectionalLight(props) {
  const debug = props.debug;
  const directionalLight = useRef()
  const shadowCamera = useRef()
  useHelper(debug && directionalLight, DirectionalLightHelper)
  useHelper(debug && shadowCamera, CameraHelper)
  return (
    <directionalLight
      ref={directionalLight}
      intensity={props.intensity}
      color={'#ffffff'}
      castShadow
      position={props.position}
      shadow-mapSize={[1024 * 2, 1024 * 2]}
      // shadow-radius={10} // Blurred shadows don't work with shadowMapType of softshadowmap (the defalt on three-fibre Canvas).
    >
      <orthographicCamera ref={shadowCamera} attach="shadow-camera" args={[-15, 15, 15, -15, 1, 40]} />
    </directionalLight>
  )
}

DefaultDirectionalLight.propTypes = {
  intensity: PropTypes.number,
  position: PropTypes.array,
  debug: PropTypes.bool,
};

DefaultDirectionalLight.defaultProps = {
  intensity: 1,
  position: [5, 10, 5],
  debug: false,
};

export default DefaultDirectionalLight;