import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useWindowSize } from '@react-hook/window-size';

const Cube = ({ position, scale, isZoomed, onClick }) => {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  
  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh
      ref={ref}
      position={position}
      scale={scale}
      onClick={onClick}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isZoomed ? 'hotpink' : hovered ? 'lightblue' : 'orange'} />
    </mesh>
  );
};

const Box = ({ numCubes }) => {
  const [windowWidth] = useWindowSize();
  const [zoomedIndex, setZoomedIndex] = useState(null);
  
  // Size of each cube based on screen width
  const cubeSize = Math.min(windowWidth / (numCubes + 1), 1.5);

  const cubes = Array.from({ length: numCubes }, (_, index) => {
    const isZoomed = index === zoomedIndex;
    return (
      <Cube
        key={index}
        position={[(index - numCubes / 2) * (cubeSize + 0.2), 0, 0]}
        scale={isZoomed ? [cubeSize * 2, cubeSize * 2, cubeSize * 2] : [cubeSize, cubeSize, cubeSize]}
        isZoomed={isZoomed}
        onClick={() => setZoomedIndex(isZoomed ? null : index)}
      />
    );
  });

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {cubes}
    </Canvas>
  );
};

export default Box;
